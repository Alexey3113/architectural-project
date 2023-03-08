import { StateSchema } from 'app/providers/StoreProvider';

export const getValidationErrors = (state: StateSchema) => state.profile?.validationErrors;
