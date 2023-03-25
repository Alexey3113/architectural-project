import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency/model/types/currency';

export enum ValidationProfileErrors {
    NO_DATA = 'no_data',
    INCORRECT_USER_DATA = 'incorrect_user_data',
    INCORRECT_AGE = 'incorrect_age',
    INCORRECT_USERNAME = 'incorrect_username',
    INCORRECT_COUNTRY = 'incorrect_country',
    SERVER_ERROR = 'server_error',
}

export interface Profile {
    id?: string;
    first?: string;
    lastname?: string;
    age?: number,
    currency?: Currency,
    country?: Country;
    city?: string,
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile | null;
    form?: Profile | null;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validationErrors?: ValidationProfileErrors[];
}
