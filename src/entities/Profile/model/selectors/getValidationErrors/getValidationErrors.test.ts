import { StateSchema } from 'app/providers/StoreProvider';
import { getValidationErrors } from './getValidationErrors';
import { ValidationProfileErrors } from '../../types/profile';

describe('getValidationErrors', () => {
    test('should return error value', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validationErrors: [
                    ValidationProfileErrors.INCORRECT_AGE,
                    ValidationProfileErrors.INCORRECT_COUNTRY,
                ],
            },
        };
        expect(getValidationErrors(state as StateSchema)).toEqual([
            ValidationProfileErrors.INCORRECT_AGE,
            ValidationProfileErrors.INCORRECT_COUNTRY,
        ]);
    });
});
