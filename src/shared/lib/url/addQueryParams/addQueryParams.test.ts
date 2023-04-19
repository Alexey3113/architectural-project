import { getQueryParams } from './addQueryParams';

describe('addQueryParams', () => {
    test('with one params', () => {
        const params = getQueryParams({
            text: 'test',
        });
        expect(params).toEqual('?text=test');
    });
    test('with several params', () => {
        const params = getQueryParams({
            text: 'test',
            mytext2: 'test2',
        });
        expect(params).toEqual('?text=test&mytext2=test2');
    });
    test('with undefined params', () => {
        const params = getQueryParams({
            text: 'test',
            second: undefined,
        });
        expect(params).toEqual('?text=test');
    });
});
