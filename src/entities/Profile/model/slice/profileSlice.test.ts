import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { profileActions, profileReducer } from './profileSlice';
import { Profile, ProfileSchema, ValidateProfileError } from '../types/profile';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

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

const profileUpdatedData: Profile = {
  first: 'Updated name',
  lastname: 'Updated name',
  username: 'Updated admin',
  age: 35,
  avatar: 'url updated',
  city: 'Some city',
  country: Country.Russia,
  currency: Currency.RUB,
};

describe('profileSlice', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
    };

    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({
      readonly: true,
    });
  });

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = {
      data: profileData,
      form: {
        username: '',
      },
    };

    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
      readonly: true,
      validateErrors: undefined,
      data: profileData,
      form: profileData,
    });
  });

  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: profileData,
    };

    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({
          username: 'Some username',
        }),
      ),
    ).toEqual({
      form: { ...profileData, username: 'Some username' },
    });
  });

  test('test update profile service pending', async () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };

    expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('test update profile service fulfilled', async () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      data: profileData,
      form: profileData,
    };

    expect(
      profileReducer(state as ProfileSchema, updateProfileData.fulfilled(profileUpdatedData, '')),
    ).toEqual({
      data: profileUpdatedData,
      form: profileUpdatedData,
      isLoading: false,
      readonly: true,
      validateErrors: undefined,
    });
  });
});
