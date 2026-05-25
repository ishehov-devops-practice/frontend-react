import { render } from '@testing-library/react';
import App from './App';

describe('Frontend Shell Verification', () => {
  it('renders the core application frame without crashing', () => {
    const { container } = render(<App />);

    expect(container).toBeDefined();
  });
});
