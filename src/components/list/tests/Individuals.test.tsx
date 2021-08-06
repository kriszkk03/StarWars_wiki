import React from 'react';
import { act, cleanup, render, screen, waitFor } from '@testing-library/react';
import Individuals from '../Individuals';
import MockAdapter from 'axios-mock-adapter';
import { ApiInstance } from '../../../api/api';
import { useParams } from 'react-router';

const backButtonId = 'backButton';
const componentTitleId = 'componentTitle';

let mock: MockAdapter;
let mockParams = jest.fn();
let mockHistory = jest.fn();

const tmp = 'droid';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => {
    return { id: mockParams() };
  },
  useHistory: () => mockHistory(),
}));

describe('individuals component', () => {
  beforeAll(() => {
    mock = new MockAdapter(ApiInstance);
  });
  test('should contains necessary fields', async () => {
    await waitFor(() => {
      mockParams.mockReturnValue(tmp);
      mock.onGet(`r2-d2`).reply(200, { name: 'r2-d2' });

      mock.onGet(`/species/${tmp}`).reply(200, { name: 'r2-d2', people: ['r2-d2'] });
      render(<Individuals />);
    });
    //console.error('history:', mock.history);

    //expect(mock.history).toBeCalledWith('teszt');
    const backButton = screen.getByTestId(backButtonId);
    expect(backButton).toBeDefined();
    //expect(screen.getByTestId('spinner')).not.toBeDefined();
    const componentTitle = screen.getByTestId(componentTitleId);
    expect(componentTitle).toBeDefined();
    expect(componentTitle.innerHTML).toBe('ListPage');

    const buttons = screen.getAllByTestId('buttonToProfile');
    expect(buttons).toBeDefined();
  });
  test('should contains spinner before fetching data', () => {
    mockParams.mockReturnValue(tmp);
    render(<Individuals />);
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeDefined();
  });
});
