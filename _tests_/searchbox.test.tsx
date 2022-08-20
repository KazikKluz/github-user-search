import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Home from '../pages/index';

describe('testing searchbox functionality', () => {
  test('displays no result if user not found', async () => {
    render(<Home />);

    const inputField = screen.getByAltText('searchbox');
    userEvent.clear(inputField);
    fireEvent.change(inputField, { target: { value: 'nonexisting' } });

    const searchButton = screen.getByRole('button', { name: /search/i });
    userEvent.click(searchButton);

    const alertmessage = await screen.findByText('No results');
    expect(alertmessage).toBeInTheDocument();
  });
});
