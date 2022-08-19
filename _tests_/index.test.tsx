import { render, screen } from '@testing-library/react';

import Home from '../pages/index';

describe('renders homepage', () => {
  test('renders navbar, searchbox', () => {
    render(<Home />);
    const navbar = screen.getByText(/devfinder/i);
    expect(navbar).toBeInTheDocument();

    const searchbox = screen.getByPlaceholderText(/search github username.../i);
    expect(searchbox).toBeInTheDocument();

    const mainbox = screen.getByRole('main');
    expect(mainbox).toBeInTheDocument();
  });
});
