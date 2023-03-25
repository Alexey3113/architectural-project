import { useCallback, useState } from 'react';

interface HoverActions {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

type useHoverResult = [boolean, HoverActions]

export const useHover = (): useHoverResult => {
    const [hovered, setHovered] = useState(false);

    const onMouseEnter = useCallback(() => {
        setHovered(true);
    }, []);
    const onMouseLeave = useCallback(() => {
        setHovered(false);
    }, []);

    return [hovered, { onMouseEnter, onMouseLeave }];
};
