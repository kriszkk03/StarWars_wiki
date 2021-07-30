import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { NameType } from './types';
import { Container, Header, Content, BackButton, Title, Button, SpinnerContainer } from './style';
import { SearchResult } from '../../api/types/searchResult';
import { ApiInstance } from '../../api/api';
import * as ReactBootStrap from 'react-bootstrap';

function Results() {
  const { name } = useParams<NameType>();
  const history = useHistory();
  const [names, setNames] = useState(['']);
  const [loaded, setLoaded] = useState(false);

  const backToMainPage = (): void => {
    history.push('/');
  };

  const searchNames = async (name: string) => {
    const data = await ApiInstance.get<SearchResult>('people/?search=' + name);
    let resultArray: string[] = [];
    data.data.results.forEach((person) => {
      resultArray.push(person.name);
    });
    setNames(resultArray);
    setLoaded(true);
  };

  useEffect(() => {
    searchNames(name);
  }, [name]);
  const clickName = (name: string) => {
    history.push(`/profile/${name}`);
  };
  return (
    <Container>
      <Header>
        <BackButton onClick={() => backToMainPage()}>Back to Mainpage</BackButton>
        <Title>ResultPage</Title>
      </Header>
      <Content>
        {loaded ? (
          names.length > 0 &&
          names.map((name: string) => {
            return (
              <Button key={name} onClick={() => clickName(name)}>
                {name}
              </Button>
            );
          })
        ) : (
          <SpinnerContainer>
            <ReactBootStrap.Spinner animation="border" />
          </SpinnerContainer>
        )}
      </Content>
    </Container>
  );
}

export default Results;
