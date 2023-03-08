import { Profile, ValidationProfileErrors } from '../../types/profile';

export const validateProfileData = (profile?: Profile | null): ValidationProfileErrors[] => {
    if (!profile) {
        return [ValidationProfileErrors.NO_DATA];
    }
    const {
        age, username, lastname, first, country,
    } = profile;
    const errors: ValidationProfileErrors[] = [];

    if (!lastname || !first) {
        errors.push(ValidationProfileErrors.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidationProfileErrors.INCORRECT_AGE);
    }

    if (!username) {
        errors.push(ValidationProfileErrors.INCORRECT_USERNAME);
    }

    if (!country) {
        errors.push(ValidationProfileErrors.INCORRECT_COUNTRY);
    }

    return errors;
};
