import { DeepPartial } from '@reduxjs/toolkit';
import { Story } from '@storybook/api';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (story: () => Story) => (
    <StoreProvider initialState={state}>
        {story()}
    </StoreProvider>
);
