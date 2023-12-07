import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Sidebar.module.scss';
import ArrowLeft from '../../../../shared/assets/icons/arrow-left.svg';
import ArrowRight from '../../../../shared/assets/icons/arrow-right.svg';
import MainIcon from '../../../../shared/assets/icons/main-20-20.svg';
import AboutIcon from '../../../../shared/assets/icons/about-20-20.svg';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapset] = useState(false);

  const collapse = () => setCollapset((prev) => !prev);

  const { t } = useTranslation();

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
      <div className={cls.linkItems}>
        <AppLink to={RoutePath.main} theme={AppLinkTheme.SECONDARY} className={cls.linkItem}>
          <MainIcon className={cls.icon} />
          <span className={cls.link}>{t('navMain')}</span>
        </AppLink>
        <AppLink to={RoutePath.about} theme={AppLinkTheme.SECONDARY} className={cls.linkItem}>
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>{t('navAbout')}</span>
        </AppLink>
      </div>
    </div>
  );
};
