import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Home from '../pages/index';

describe('testing mainbox component', () => {
  test('displays no data when rendered', async () => {
    render(<Home />);

    const name = screen.getByRole('heading', { level: 1 });
    expect(name).toHaveTextContent('');

    const bio = screen.getByTestId('paragraph');
    expect(bio).toHaveTextContent('');
  });

  test('displays relevant data when valid user found', async () => {
    render(<Home />);

    const inputField = screen.getByAltText('searchbox');

    const searchButton = screen.getByRole('button', { name: /search/i });
    userEvent.clear(inputField);
    fireEvent.change(inputField, { target: { value: 'octocat' } });

    userEvent.click(searchButton);
    const name = screen.getByRole('heading', { level: 1 });
    await waitFor(() => expect(name).toHaveTextContent('monalisa octocat'));

    const bio = screen.getByTestId('paragraph');
    await waitFor(() => expect(bio).toHaveTextContent('There once was...'));
  });
});
