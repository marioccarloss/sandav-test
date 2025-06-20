import { render, screen } from '@/utils/test-utils';
import Button from './button';
import styles from './button.module.css';

describe('Button', () => {
  it('should apply primary styles by default', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });

    expect(button).toHaveClass(styles.button);
    expect(button).toHaveClass(styles.primary);
  });

  it('should apply danger styles when variant is danger', () => {
    render(<Button variant="danger">Delete</Button>);
    const button = screen.getByRole('button', { name: /delete/i });

    expect(button).toHaveClass(styles.button);
    expect(button).toHaveClass(styles.danger);
  });

  it('should apply cta styles when variant is cta', () => {
    render(<Button variant="cta">Action!</Button>);
    const button = screen.getByRole('button', { name: /action!/i });

    expect(button).toHaveClass(styles.button);
    expect(button).toHaveClass(styles.cta);
  });
});
