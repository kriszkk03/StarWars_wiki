import styled from 'styled-components';

export const Container = styled.div`
  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: fit-content 1fr;
  grid-template-areas:
    'bar'
    'contentt';
`;
export const Header = styled.div`
  grid-area: bar;
  display: block;
  width: 100%;
  height: fit-content;
  background-color: black;
  text-align: center;
`;
export const SearchInput = styled.input`
  height: 20%;
  min-width: 150px;
  width: 50%;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;
export const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-family: 'Pathway Gothic One', sans-serif;
  font-size: 45px;
  font-weight: 900;
  text-align: center;
  color: #ffdf28;
`;
export const SearchButton = styled.button`
  display: block;
  height: 10%;
  min-width: 150px;
  width: 15%;
  background-color: #b8b8b8;
  border: 1px solid black;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  &:hover {
    background-color: #8c8c8c;
    cursor: pointer;
  }
`;
export const Content = styled.div`
  grid-area: contentt;
  display: block;
  text-align: center;
`;

export const Button = styled.button`
  display: block;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Pathway Gothic One', sans-serif;
  height: fit-content;
  min-width: 100px;
  width: 10%;
  background-color: #b8b8b8;

  &:hover {
    background-color: #8c8c8c;
    cursor: pointer;
  }
`;

export const ListOfSpecies = styled.select`
  color: black;
  width: 15%;
  min-width: 200px;
  height: 40px;
  border-color: black;
  font-size: large;

  option {
    color: black;
  }
`;

export const SpinnerContainer = styled.div`
  margin-top: 30vh;
`;

export const ErrorMsg = styled.p`
  text-align: center;
  color: red;
  margin: 0;
`;
