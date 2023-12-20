import { loginActions, loginReducer } from './loginSlice';
import { LoginSchema } from '../types/loginSchema';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

describe('loginSlice', () => {
  test('set username', () => {
    const state: DeepPartial<LoginSchema> = {
      username: '',
    };

    expect(loginReducer(state as LoginSchema, loginActions.setUsername('username'))).toEqual({
      username: 'username',
    });
  });

  test('set password', () => {
    const state: DeepPartial<LoginSchema> = {
      password: '',
    };

    expect(loginReducer(state as LoginSchema, loginActions.setPassword('pass'))).toEqual({
      password: 'pass',
    });
  });

  test('set isLoading', async () => {
    const state: DeepPartial<LoginSchema> = {
      isLoading: false,
    };

    const action = { type: loginByUsername.pending.type };
    expect(loginReducer(state as LoginSchema, action)).toEqual({
      isLoading: true,
      error: undefined,
    });
  });

  test('set error', async () => {
    const state: DeepPartial<LoginSchema> = {
      isLoading: false,
    };

    const action = { type: loginByUsername.rejected.type, payload: 'some error' };
    expect(loginReducer(state as LoginSchema, action)).toEqual({
      isLoading: false,
      error: 'some error',
    });
  });
});
