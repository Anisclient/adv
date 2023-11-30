import { useState } from 'react'
import cls from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import ArrowLeft from '../../../../shared/assets/icons/arrow-left.svg'
import ArrowRight from '../../../../shared/assets/icons/arrow-right.svg'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapset] = useState(false)

  const collapse = () => setCollapset((prev) => !prev)

  return (
    <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <Button theme={ThemeButton.CLEAR} onClick={collapse} className={cls.sidebar__button}>
        {collapsed ? <ArrowRight /> : <ArrowLeft />}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.sidebar__lang} />
      </div>
    </div>
  )
}
