import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from './articleDetails.selectors';

describe('articleDetails selectors', () => {
    test('getArticleDetailsData', () => {
        const data = {
            id: '1',
            title: 'subtitle',
        };
        const state: DeepPartial<StateSchema> = {
            articlesDetails: {
                data,
            },
        };
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    });
    test('getArticleDetailsLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articlesDetails: {
                isLoading: true,
            },
        };
        expect(getArticleDetailsData(state as StateSchema)).toEqual(true);
    });
    test('getArticleDetailsError', () => {
        const state: DeepPartial<StateSchema> = {
            articlesDetails: {
                error: 'error',
            },
        };
        expect(getArticleDetailsData(state as StateSchema)).toEqual('error');
    });
});
