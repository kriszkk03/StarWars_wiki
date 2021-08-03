import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { IDType } from './types';
import { ApiInstance } from '../../api/api';
import { Person, Species, URLString } from '../../api/types/types';
import { Container, Content, Button, SpinnerContainer, Header, Title, SpeciesName, BackButton } from './style';
import * as ReactBootStrap from 'react-bootstrap';

function Individuals() {
  const { id } = useParams<IDType>();
  const [names, setNames] = useState<string[]>([]);
  const [title, setTitle] = useState('');
  const history = useHistory();
  const [loaded, setLoaded] = useState(false);
  /**
   * prepare a list of those people who have the same species
   * @param id the id of the selected species
   */
  const getPeopleURL = async (id: string) => {
    const data = await ApiInstance.get<Species>(`/species/${id}`);
    setTitle(data.data.name);
    const promiseArray: Promise<string>[] = data.data.people.map(async (person: URLString) => {
      const tmp = await ApiInstance.get<Person>(person.toString());
      return tmp.data.name;
    });
    const resultArray = await Promise.all(promiseArray);
    setNames(resultArray);
    setLoaded(true);
  };
  function backToMainPage(): void {
    history.push('/');
  }
  const clickName = (name: string) => {
    history.push(`/profile/${name}`);
  };

  useEffect(() => {
    getPeopleURL(id);
  }, [id]);
  return (
    <Container>
      <Header>
        <BackButton data-testid="backButton" onClick={() => backToMainPage()}>
          Back to Mainpage
        </BackButton>
        <Title data-testid="componentTitle">ListPage</Title>
      </Header>
      <Content>
        {loaded ? <SpeciesName>{title} individuals!</SpeciesName> : <></>}
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

export default Individuals;
