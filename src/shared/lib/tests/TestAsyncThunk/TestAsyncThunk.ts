import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

type ActionCreatorType<Returned, Args, RejectValue> = (
  args: Args
) => AsyncThunkAction<Returned, Args, { rejectValue: RejectValue }>;

export class TestAsyncThunk<Returned, Args, RejectValue> {
    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema;

    actionCreator: ActionCreatorType<Returned, Args, RejectValue>;

    constructor(actionCreator: ActionCreatorType<Returned, Args, RejectValue>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    async callThunk(args: Args) {
        const action = this.actionCreator(args);
        const result = await action(this.dispatch, this.getState, undefined);

        return result;
    }
}
