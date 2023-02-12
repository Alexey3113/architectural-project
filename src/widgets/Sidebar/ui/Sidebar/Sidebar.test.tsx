import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation }
    from
    'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar testing', () => {
    test('Testing render sidebar', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId(/sidebar/)).toBeInTheDocument();
    });
    test('Testing render sidebar', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('btn-toggle');
        expect(screen.getByTestId(/sidebar/)).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId(/sidebar/)).toHaveClass('collapsed');
    });
});
