import { ApiInstance } from '../../api/api';
import React, { useCallback, useEffect, useState } from 'react';
import { SearchResult } from '../../api/types/searchResult';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Header,
  Content,
  Button,
  SearchInput,
  Title,
  ListOfSpecies,
  SpinnerContainer,
  SearchButton,
  ErrorMsg,
} from './style';
import * as ReactBootStrap from 'react-bootstrap';

function HomePage() {
  const [inputValue, setInputValue] = useState('');
  const bonus = 'people/?search=';
  const history = useHistory();
  const [species, setSpecies] = useState(['']);
  const [selectValue, setSelectValue] = useState('1');
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (bonus: string, value: string) => {
    const data = await ApiInstance.get<SearchResult>(bonus + value);
    value.trim() === '' || data.data.count === 0
      ? setError(true)
      : data.data.count === 1
      ? history.push(`/profile/${value}`)
      : history.push(`/results/${value}`);
  };

  const ListSpecies = useCallback(async (endpoint: string, resultArray: string[]) => {
    const data = await ApiInstance.get<SearchResult>(endpoint);
    //  van egy üres page4 amin nem tudok végigiterálni!!
    if (data.data.results) {
      data.data.results.forEach((species) => {
        resultArray.push(species.name);
      });
    }
    if (data.data.next !== undefined) {
      ListSpecies(data.data.next, resultArray);
    } else {
      setSpecies(resultArray);
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    ListSpecies('/species/', []);
  }, [ListSpecies]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
  };

  const listSelected = () => {
    history.push(`/species/${selectValue}`);
  };

  return (
    <Container>
      <Header>
        <SearchInput type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <SearchButton onClick={() => handleSearch(bonus, inputValue)}>Search</SearchButton>
        {error ? <ErrorMsg>Sorry, No results! Try another term or use the Species list!</ErrorMsg> : <></>}
        <Title>StarWars Wiki</Title>
      </Header>
      <Content>
        {loaded ? (
          <>
            <h1>List of species:</h1>
            <ListOfSpecies
              id="list"
              value={selectValue}
              onChange={(e) => {
                handleSelectChange(e);
              }}
            >
              {species.map((value: string, key: number) => {
                return (
                  <option key={key} value={(key + 1).toString()}>
                    {value}
                  </option>
                );
              })}
            </ListOfSpecies>
            <Button
              onClick={() => {
                listSelected();
              }}
            >
              List!
            </Button>
          </>
        ) : (
          <SpinnerContainer>
            <ReactBootStrap.Spinner animation="border" />
          </SpinnerContainer>
        )}
      </Content>
    </Container>
  );
}

export default HomePage;
