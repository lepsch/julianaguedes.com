import { type ReactNode } from "react"
import { Link } from "react-router"
import clsx from "clsx"
import styles from "./Button.module.scss"

enum ButtonTheme {
  light = "light",
  dark = "dark",
}

export const Button = ({
  children,
  to,
  theme = ButtonTheme.light,
}: {
  children?: ReactNode | undefined
  to: string
  theme?: ButtonTheme
}) => {
  return (
    <Link className={clsx(styles["Button"], theme)} to={to}>
      {children}
    </Link>
  )
}

Button.Theme = ButtonTheme
