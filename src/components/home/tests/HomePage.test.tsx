import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import HomePage from '../HomePage';

const searchInputId = 'searchInput';
const searchButtonId = 'searchButton';
const errorMsgId = 'errorMsg';
const mockSearch = jest.fn();
const mockError = jest.fn();

jest.mock('../useSearch.ts', () => ({
  useSearch: () => ({
    handleSearch: mockSearch,
    error: mockError(),
  }),
}));

describe('homepage component', () => {
  afterEach(cleanup);
  afterAll(() => {
    jest.unmock('../useSearch.ts');
  });
  test('should contains necessary fields', () => {
    render(<HomePage />);
    //todo: extended other fields
    const searchInput = screen.getByTestId(searchInputId);
    expect(searchInput).toBeDefined();
  });
  test('should handle ERROR on search click', async () => {
    mockError.mockReturnValue(true);
    const searchButton = screen.getByTestId(searchButtonId);
    fireEvent.click(searchButton);
    const errorMsg = screen.getByTestId(errorMsgId);
    expect(errorMsg).toBeDefined();
    expect(mockSearch).toBeCalled();
  });
});
