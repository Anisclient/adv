export type Mods = Record<string, string | boolean | undefined>;

export function classNames(
  cls: string,
  mods: Mods = {},
  add: Array<string | undefined> = [],
): string {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
    ...add.filter(Boolean),
  ].join(' ');
}
