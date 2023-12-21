import { ChangeEvent, memo, useMemo } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select = memo(
  ({
    className, label, options, value, onChange, readonly,
  }: SelectProps) => {
    const mods: Mods = {};

    const optionList = useMemo(
      () => options?.map((opt) => (
        <option value={opt.value} key={opt.value} className={cls.option}>
          {opt.content}
        </option>
      )),
      [options],
    );

    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(event.target.value);
    };

    return (
      <div className={classNames(cls.selectWrapper, mods, [className])}>
        {label && <span className={cls.label}>{`${label}>`}</span>}
        <select className={cls.select} value={value} onChange={onChangeHandler} disabled={readonly}>
          {optionList}
        </select>
      </div>
    );
  },
);
