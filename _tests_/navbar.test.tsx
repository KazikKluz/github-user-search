import { screen, waitFor } from '@testing-library/react';
import { render } from '../test-utils/testing-library-utlls';
import userEvent from '@testing-library/user-event';

import Home from '../pages/index';

describe('test navbars functionality', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  test('pallete decription changes to light after clicking and back to dark when clicked again', async () => {
    render(<Home />);

    const paleteSwitch = await waitFor(() =>
      screen.findByRole('button', { name: /dark/i })
    );
    userEvent.click(paleteSwitch);

    const darkSwitch = await screen.findByRole('button', { name: /light/i });
    expect(darkSwitch).toBeInTheDocument();

    userEvent.click(darkSwitch);
    const anotherswitch = await screen.findByRole('button', { name: /dark/i });
    expect(anotherswitch).toBeInTheDocument();
  });
});
