import { useState } from 'react'
import cls from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapset] = useState(false)

  const toggle = () => setCollapset((prev) => !prev)

  return (
    <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <button onClick={toggle}>Toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.sidebar__lang} />
      </div>
    </div>
  )
}
