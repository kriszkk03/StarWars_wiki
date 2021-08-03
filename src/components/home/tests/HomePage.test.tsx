import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import HomePage from '../HomePage';
import { useList } from '../useList';
import axios from 'axios';

const searchInputId = 'searchInput';
const searchButtonId = 'searchButton';
const componentTitleId = 'componentTitle';
const listOfSpeciesId = 'listOfSpecies';
const loadId = 'loading';
/* const errorMsgId = 'errorMsg';

const mockSearch = jest.fn();
const mockError = jest.fn();
*/
const mockList = jest.fn();
const mockLoaded = jest.fn();

/* jest.mock('../useSearch.ts', () => ({
  useSearch: () => ({
    handleSearch: mockSearch,
    error: mockError(),
  }),
})); */
jest.mock('../useList.ts', () => ({
  useList: () => ({
    species: mockList,
    loaded: mockLoaded,
  }),
}));
describe('homepage component', () => {
  afterEach(cleanup);
  /*afterAll(() => {
    jest.unmock('../useSearch.ts');
    //jest.unmock('../useList');
  }); */
  test('should contains necessary fields', () => {
    render(<HomePage />);
    //todo: extended other fields
    const searchInput = screen.getByTestId(searchInputId);
    expect(searchInput).toBeDefined();
    const searchButton = screen.getByTestId(searchButtonId);
    expect(searchButton).toBeDefined();
    const componentTitle = screen.getByTestId(componentTitleId);
    expect(componentTitle).toBeDefined();
  });
  test('on loading', async () => {
    render(<HomePage />);
    const load = screen.getByTestId(loadId);
    expect(load).toBeDefined();
    // mockLoaded.mockReturnValueOnce(true);
    // mockList.mockReturnValueOnce(['first', 'second', 'third']);
    // const listOfSpecies = await screen.findByTestId(listOfSpeciesId);
    // expect(listOfSpecies).toBeDefined();
  });
  /*   test('should handle ERROR on search click', async () => {
    mockError.mockReturnValue(true);
    const searchButton = screen.getByTestId(searchButtonId);
    fireEvent.click(searchButton);
    const errorMsg = screen.getByTestId(errorMsgId);
    expect(errorMsg).toBeDefined();
    expect(mockSearch).toBeCalled();
  }); */
});
