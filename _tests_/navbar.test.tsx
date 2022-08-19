import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Home from '../pages/index';

describe('test navbars functionality', () => {
  test('pallete decription changes to light after clicking and back to dark when clicked again', async () => {
    render(<Home />);

    const paleteSwitch = screen.getByRole('button', { name: /dark/i });
    userEvent.click(paleteSwitch);

    const darkSwitch = await screen.findByRole('button', { name: /light/i });
    expect(darkSwitch).toBeInTheDocument();

    userEvent.click(darkSwitch);
    const anotherswitch = await screen.findByRole('button', { name: /dark/i });
    expect(anotherswitch).toBeInTheDocument();
  });
});
