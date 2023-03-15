import { StateSchema } from 'app/providers/StoreProvider';

export const getAuthInited = (state: StateSchema) => state.user._inited;
