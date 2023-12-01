import { classNames } from 'shared/lib/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import LightIcon from '../../../shared/assets/icons/theme-light.svg';
import DarkIcon from '../../../shared/assets/icons/theme-dark.svg';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      className={classNames('', {}, [className])}
      theme={ThemeButton.CLEAR}
    >
      {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};
