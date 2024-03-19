import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';

import Investors from './Investors';

jest.mock('../../services', () => ({
  investorService: {
    getInvestors: jest.fn().mockResolvedValue([
      {
        firm_id: 2670,
        firm_name: 'Mjd Jedi fund',
        firm_type: 'bank',
        date_added: '2010-06-08T00:00:00Z',
        address: '29 Nathan Road, Hong Kong',
        city: 'Hong Kong',
        country: 'China',
      },
      {
        firm_id: 332,
        firm_name: 'Cza Weasley fund',
        firm_type: 'wealth manager',
        date_added: '2002-05-29T00:00:00Z',
        address: '31 Baker Street, London',
        city: 'London',
        country: 'United Kingdom',
      },
    ]),
  },
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Investors', () => {
  beforeEach(() => {
    (useNavigate as jest.Mock).mockClear();
  });

  it('should fetch and display Investors list', async () => {
    render(
      <Router>
        <Investors />
      </Router>
    );

    await waitFor(() => {
      expect(screen.getByText('Mjd Jedi fund')).toBeInTheDocument();
      expect(screen.getByText('Cza Weasley fund')).toBeInTheDocument();
    });
  });

  it('should navigate to investor commitment on row click', async () => {
    (useNavigate as jest.Mock).mockReturnValue(jest.fn());
    const mockNavigate = useNavigate();

    render(
      <Router>
        <Investors />
      </Router>
    );

    await waitFor(() => {
      const row = screen.getByText('Mjd Jedi fund')!.closest('tr');
      row && row.click();
    });

    expect(mockNavigate).toHaveBeenCalledWith('/investor/commitment/2670', {
        replace: true,
        state: { firmName: 'Mjd Jedi fund' }
    });
  });
});
