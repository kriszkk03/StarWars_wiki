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
  //height: 100px;
  background-color: black;

  //position: relative;
`;
export const Title = styled.h1`
  color: azure;
  font-weight: 800;
  text-align: center;
  &:hover {
    cursor: default;
  }
`;
export const BackButton = styled.button`
  min-width: 150px;
  width: 15%;
  background-color: #000000;
  color: azure;
  font-size: x-large;
  font-weight: 700;
  margin-bottom: 10px;
  border: 0;
  line-height: 100%;
  &:hover {
    color: #e0e000;
    cursor: pointer;
  }
`;
export const Content = styled.div`
  grid-area: contentt;
  display: block;
`;
export const Button = styled.button`
  display: block;
  height: fit-content;
  min-height: 40px;
  min-width: 150px;
  width: 15%;
  background-color: #b8b8b8;
  border: 1px solid black;
  margin-top: 3%;
  margin-left: auto;
  margin-right: auto;
  &:hover {
    background-color: #8c8c8c;
    cursor: pointer;
  }
`;

export const SpeciesName = styled.h1`
  text-align: center;
  font-weight: 700;
  color: Black;
  &:hover {
    cursor: default;
  }
`;

export const SpinnerContainer = styled.div`
  margin-top: 30vh;
  margin-left: 50vw;
`;
