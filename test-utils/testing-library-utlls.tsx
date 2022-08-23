import { render } from '@testing-library/react';
import { ThemeProvider } from 'next-themes';
import { JSXElementConstructor } from 'react';

type Key = string | number;

interface ReactElement<
  P = any,
  T extends string | JSXElementConstructor<any> =
    | string
    | JSXElementConstructor<any>
> {
  type: T;
  props: P;
  key: Key | null;
}
const renderWithContext = (ui: ReactElement, options = {}) => {
  render(ui, { wrapper: ThemeProvider, ...options });
};

//re-export everything
export * from '@testing-library/react';

//override render method
export { renderWithContext as render };
