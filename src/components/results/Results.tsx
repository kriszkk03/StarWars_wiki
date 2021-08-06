import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { NameType } from './types';
import { Container, Header, Content, BackButton, Title, Button, SpinnerContainer } from './style';

import * as ReactBootStrap from 'react-bootstrap';
import { useSearchNames } from './useSearchNames';

function Results() {
  const { name } = useParams<NameType>();
  const history = useHistory();
  const { names, loaded } = useSearchNames({ name });

  const backToMainPage = (): void => {
    history.push('/');
  };

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
