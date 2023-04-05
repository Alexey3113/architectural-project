import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ScrollSavingSchema } from '../types/scrollSaving';

const initialState: ScrollSavingSchema = {
    scroll: {},
};

export const scrollSavingSlice = createSlice({
    name: 'scrollSaving',
    initialState,
    reducers: {
        setScroll(state, { payload }: PayloadAction<{ path: string, scroll: number }>) {
            state.scroll[payload.path] = payload.scroll;
        },
    },
});

export const { actions: scrollSavingActions } = scrollSavingSlice;
export const { reducer: scrollSavingReducer } = scrollSavingSlice;
