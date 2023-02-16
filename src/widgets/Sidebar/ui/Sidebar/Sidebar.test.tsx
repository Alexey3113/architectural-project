import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar testing', () => {
    test('Testing render sidebar', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId(/sidebar/)).toBeInTheDocument();
    });
    test('Testing render sidebar', () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('btn-toggle');
        expect(screen.getByTestId(/sidebar/)).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId(/sidebar/)).toHaveClass('collapsed');
    });
});
