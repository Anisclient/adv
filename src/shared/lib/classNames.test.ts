import { classNames } from './classNames';

describe('classNames', () => {
  test('wth only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with mods', () => {
    const expected = 'someClass hover active';
    expect(classNames('someClass', { hover: true, active: true }, [])).toBe(expected);
  });

  test('with additional param', () => {
    const expected = 'someClass hover active class1 class2';
    expect(classNames('someClass', { hover: true, active: true }, ['class1', 'class2'])).toBe(
      expected,
    );
  });

  test('with false mod', () => {
    const expected = 'someClass hover active class1 class2';
    expect(
      classNames('someClass', { hover: true, active: true, scroll: false }, ['class1', 'class2']),
    ).toBe(expected);
  });

  test('with undefined mod', () => {
    const expected = 'someClass hover active class1 class2';
    expect(
      classNames('someClass', { hover: true, active: true, scroll: undefined }, [
        'class1',
        'class2',
      ]),
    ).toBe(expected);
  });
});
