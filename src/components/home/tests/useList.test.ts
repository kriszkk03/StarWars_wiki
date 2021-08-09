import MockAdapter from 'axios-mock-adapter';
import { ApiInstance } from '../../../api/api';

let mock: MockAdapter;

describe('useList customhook', () => {
  beforeAll(() => {
    mock = new MockAdapter(ApiInstance);
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('should setup values correctly', () => {});
});
