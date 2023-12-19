import { memo, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';
import ArrowLeft from '../../../../shared/assets/icons/arrow-left.svg';
import ArrowRight from '../../../../shared/assets/icons/arrow-right.svg';
import { SidebarItemList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapset] = useState(false);

  const collapse = () => setCollapset((prev) => !prev);

  const { t } = useTranslation();

  const itemsList = useMemo(
    () => SidebarItemList.map((item) => (
      <SidebarItem item={item} collapsed={collapsed} key={item.path} />
    )),
    [collapsed],
  );

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.sidebar__lang} />
      </div>
      <Button
        data-testid="sidebar-toggle"
        theme={ThemeButton.BACKGROUND_INVERTED}
        onClick={collapse}
        square
        size={ButtonSize.L}
        className={cls.sidebar__button}
      >
        {collapsed ? <ArrowRight /> : <ArrowLeft />}
      </Button>
      <div className={cls.linkItems}>{itemsList}</div>
    </div>
  );
});
