import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import axios, { AxiosStatic } from 'axios';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

type ActionCreatorType<Returned, Args, RejectValue> = (
  args: Args
) => AsyncThunkAction<Returned, Args, { rejectValue: RejectValue }>;

export class TestAsyncThunk<Returned, Args, RejectValue> {
    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema;

    actionCreator: ActionCreatorType<Returned, Args, RejectValue>;

    api: jest.MockedFunctionDeep<AxiosStatic>;

    navigate: jest.MockedFn<any>;

    constructor(actionCreator: ActionCreatorType<Returned, Args, RejectValue>, state?: DeepPartial<StateSchema>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn(() => state as StateSchema);

        this.api = mockedAxios;
        this.navigate = jest.fn();
    }

    async callThunk(args: Args) {
        const action = this.actionCreator(args);
        const result = await action(this.dispatch, this.getState, {
            api: this.api,
            navigate: this.navigate,
        });

        return result;
    }
}
