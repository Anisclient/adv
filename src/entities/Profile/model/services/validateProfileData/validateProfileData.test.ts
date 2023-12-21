import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfileData } from './validateProfileData';
import { Profile, ValidateProfileError } from '../../types/profile';

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

describe('validateProfileData', () => {
  test('success', async () => {
    const result = validateProfileData(profileData);

    expect(result).toEqual([]);
  });

  test('without first name and last name', async () => {
    const result = validateProfileData({
      ...profileData,
      first: '',
      lastname: '',
    });
    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('Incorrect age', async () => {
    const result = validateProfileData({
      ...profileData,
      age: undefined,
    });
    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('Incorrect country', async () => {
    const result = validateProfileData({
      ...profileData,
      country: undefined,
    });
    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test('Incorrect all', async () => {
    const result = validateProfileData({});
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
