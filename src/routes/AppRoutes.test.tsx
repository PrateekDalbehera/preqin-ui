import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import AppRoutes from './AppRoutes';

describe('App Routes', () => {
  it('should render Home component for default route', async () => {
    render(
        <MemoryRouter initialEntries={['/']}>
            <AppRoutes />
        </MemoryRouter>
    );

    expect(await screen.getByText('The Home of Alternatives™')).toBeInTheDocument();
  });

  it('should handle bad routes', async () => {
    render(
        <MemoryRouter initialEntries={['/route-does-not-exist']}>
            <AppRoutes />
        </MemoryRouter>
    );

    expect(await screen.getByText('404 - Page Not Found')).toBeInTheDocument();
  });
});
