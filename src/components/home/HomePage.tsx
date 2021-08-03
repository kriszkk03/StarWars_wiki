import React, { useState } from 'react';
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
import { useSearch } from './useSearch';
import { useList } from './useList';

const HomePage = () => {
  const [inputValue, setInputValue] = useState('');
  const history = useHistory();
  const [selectValue, setSelectValue] = useState('1');
  const { handleSearch, error } = useSearch({ history });
  const { species, loaded } = useList();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
  };

  const listSelected = () => {
    history.push(`/species/${selectValue}`);
  };

  return (
    <Container>
      <Header>
        <SearchInput
          data-testid="searchInput"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <SearchButton data-testid="searchButton" onClick={() => handleSearch(inputValue)}>
          Search
        </SearchButton>
        {error ? (
          <ErrorMsg data-testid="errorMsg">Sorry, No results! Try another term or use the Species list!</ErrorMsg>
        ) : (
          <></>
        )}
        <Title data-testid="componentTitle">StarWars Wiki</Title>
      </Header>
      <Content>
        {loaded ? (
          <>
            <h1>List of species:</h1>
            <ListOfSpecies
              data-testid="listOfSpecies"
              id="list"
              value={selectValue}
              onChange={(e) => {
                handleSelectChange(e);
              }}
            >
              {species &&
                Array.isArray(species) &&
                species.map((value: string, key: number) => {
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
          <div data-testid="loading">
            <SpinnerContainer>
              <ReactBootStrap.Spinner animation="border" />
            </SpinnerContainer>
          </div>
        )}
      </Content>
    </Container>
  );
};

export default HomePage;
