import { StateSchema } from 'app/providers/StoreProvider';

export const getTextAddCommentForm = (state: StateSchema) => state.addCommentForm?.text ?? '';
