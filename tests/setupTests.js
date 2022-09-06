import '@testing-library/jest-dom';

jest.mock('./../src/config.js', () => {
  return { APP_CONFIG: { OMDB_API_KEY: 'OMDB_API_KEY' } };
});