import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileForm } from './getProfileForm';
import { Profile } from '../../types/profile';

describe('getProfileForm', () => {
  const profileForm: Profile = {
    first: 'First name',
    lastname: 'Last name',
    username: 'admin',
    age: 30,
    avatar: 'url',
    city: 'Some city',
    country: Country.Russia,
    currency: Currency.RUB,
  };

  test('should return profile form', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: profileForm,
      },
    };

    expect(getProfileForm(state as StateSchema)).toEqual(profileForm);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
