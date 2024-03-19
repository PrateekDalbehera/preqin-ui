import '@testing-library/jest-dom';

jest.mock("@config/config", () => ({
  apiBaseUrl: "http://localhost:007",
}));