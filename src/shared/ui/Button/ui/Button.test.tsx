import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button testing', () => {
    test('Testing render button', () => {
        render(<Button>test</Button>);
        expect(screen.getByText(/test/)).toBeInTheDocument();
    });
    test('Testing className button', () => {
        render(<Button className="top-class">test</Button>);
        expect(screen.getByText(/test/)).toHaveClass('top-class');
    });
});
