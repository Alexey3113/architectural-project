import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

export const getScrollSavingScroll = (state: StateSchema) => state.scrollSaving.scroll;

export const getScrollSavingScrollByPath = createSelector(
    getScrollSavingScroll,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
