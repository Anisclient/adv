import { useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';
import ArrowLeft from '../../../../shared/assets/icons/arrow-left.svg';
import ArrowRight from '../../../../shared/assets/icons/arrow-right.svg';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapset] = useState(false);

  const collapse = () => setCollapset((prev) => !prev);

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <Button
        data-testid="sidebar-toggle"
        theme={ThemeButton.CLEAR}
        onClick={collapse}
        className={cls.sidebar__button}
      >
        {collapsed ? <ArrowRight /> : <ArrowLeft />}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.sidebar__lang} />
      </div>
    </div>
  );
};
