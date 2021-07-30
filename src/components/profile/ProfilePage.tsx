import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { ApiInstance } from '../../api/api';
import { SearchResult } from '../../api/types/searchResult';
import { FilmType, Person, SpeciesType } from '../../api/types/types';
import { NameType, ResultType } from './types';
import {
  Container,
  Header,
  BackButton,
  Title,
  Content,
  ProfileTable,
  TableTitle,
  SpinnerContainer,
  Attribue,
} from './style';
import * as ReactBootStrap from 'react-bootstrap';
import { resourceLimits } from 'worker_threads';

function ProfilePage() {
  const { name } = useParams<NameType>();
  const [profileData, setProfileData] = useState<Person>();
  const [loaded, setLoaded] = useState(false);
  const history = useHistory();
  const noNeed = ['created', 'edited', 'url', 'vehicles', 'homeworld', 'starships'];

  const getProfile = async (name: string) => {
    const data = await ApiInstance.get<SearchResult>(`people/?search=${name}`);
    const urlTypes = ['films', 'species'];
    let result: Person = data.data.results[0];
    const filmsPromiseArray: Promise<string>[] = data.data.results[0].films.map(async (filmURL: string) => {
      const film = await ApiInstance.get<FilmType>(filmURL);
      return film.data.title;
    });
    const filmResult = await Promise.all(filmsPromiseArray);

    const speciesPromiseArray: Promise<string>[] = data.data.results[0].species.map(async (speciesURL) => {
      const species = await ApiInstance.get<SpeciesType>(speciesURL.toString());
      return species.data.name;
    });
    const speciesResult = await Promise.all(speciesPromiseArray);
    result.films = filmResult;
    result.species = speciesResult;

    setProfileData(result);
    setLoaded(true);
  };

  function backToMainPage(): void {
    history.push('/');
  }

  useEffect(() => {
    getProfile(name);
  }, [name]);

  return (
    <Container>
      <Header>
        <BackButton onClick={() => backToMainPage()}>Back to Mainpage</BackButton>
        <Title>Profile</Title>
      </Header>
      <Content>
        {loaded ? (
          <div>
            {profileData && (
              <ProfileTable key={profileData.url.toString()}>
                <thead>
                  <tr>
                    <TableTitle>{profileData.name}</TableTitle>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(profileData).map(([key, value]) => {
                    return noNeed.includes(key) ? (
                      <tr key={key}></tr>
                    ) : (
                      <tr key={key}>
                        <td>
                          <Attribue>{key}: </Attribue>
                          {Array.isArray(value)
                            ? value.length === 0
                              ? '-'
                              : value.join(', ')
                            : value === 'n/a'
                            ? '-'
                            : value}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot></tfoot>
              </ProfileTable>
            )}
          </div>
        ) : (
          <SpinnerContainer>
            <ReactBootStrap.Spinner animation="border" />
          </SpinnerContainer>
        )}
      </Content>
    </Container>
  );
}

export default ProfilePage;
