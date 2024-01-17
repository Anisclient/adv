import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { Button, ThemeButton } from '../Button/Button';
import CopyIcon from '../../assets/icons/copy.svg';

interface CodeProps {
  className?: string;
  text: string;
}

const Code = memo((props: CodeProps) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.code, {}, [className])}>
      <Button className={cls.copyBtn} theme={ThemeButton.CLEAR} onClick={onCopy}>
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
});

export default Code;
