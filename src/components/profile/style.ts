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
export const ProfileTable = styled.table`
  margin-left: auto;
  margin-right: auto;
  table-layout: fixed;
  max-width: fit-content;
  thead {
    text-align: center;
  }
  td {
    /*   border: 1px solid;
    border-color: black; */
    border: 0;
    margin: 0;
    padding: 0;
    text-align: center;
  }
`;

export const TableTitle = styled.td`
  font-size: x-large;
  font-weight: 800;
`;

export const SpinnerContainer = styled.div`
  margin-top: 30vh;
  margin-left: 50vw;
`;
export const Attribue = styled.h5`
  font-weight: 700;
`;
