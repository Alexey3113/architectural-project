type Mods = Record<string, boolean | string>;

export const classNames = (cls: string, mods: Mods = {}, additional: string[] = []) => {
  return [
    cls,
    ...additional,
    Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([classNames]) => classNames),
  ].join(" ");
};
