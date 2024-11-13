import React from 'react'
import clsx from 'clsx'
import styles from './Button.module.scss'

enum ButtonTheme {
  light = 'light',
  dark = 'dark',
}

export const Button = ({
  children,
  href,
  theme = ButtonTheme.light,
}: {
  children?: React.ReactNode | undefined
  href: string
  theme?: ButtonTheme
}) => {
  return (
    <a className={clsx(styles['Button'], theme)} href={href}>
      {children}
    </a>
  )
}

Button.Theme = ButtonTheme
