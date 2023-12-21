import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileData } from './getProfileData';
import { Profile } from '../../types/profile';

describe('getProfileData', () => {
  const profileData: Profile = {
    first: 'First name',
    lastname: 'Last name',
    username: 'admin',
    age: 30,
    avatar: 'url',
    city: 'Some city',
    country: Country.Russia,
    currency: Currency.RUB,
  };

  test('should return profile data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: profileData,
      },
    };

    expect(getProfileData(state as StateSchema)).toEqual(profileData);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
