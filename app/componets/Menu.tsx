import { useEffect, useState } from "react"
import { Link } from "react-router"
import clsx from "clsx"

import Bars from "../assets/bars-solid.svg"
import Xmark from "../assets/xmark-solid.svg"
import { canonicalPath } from "..//canonical-path"
import styles from "./Menu.module.scss"

export function Menu() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeMenu = () => {
      setMenuOpen(false)
    }

    document.addEventListener("click", closeMenu)
    return () => {
      document.removeEventListener("click", closeMenu)
    }
  })

  return (
    <nav className={styles["Menu"]}>
      <div className={styles["menu-mobile-icon"]}>
        <div className={clsx({ hidden: menuOpen })}>
          <button
            onClick={(e) => {
              setMenuOpen(true)
              e.stopPropagation()
            }}
            aria-label="Abrir Menu"
            aria-hidden={menuOpen}
            aria-haspopup
            aria-expanded={false}
            aria-controls="menu"
          >
            <Bars role="none" />
          </button>
        </div>
        <div className={clsx({ hidden: !menuOpen })}>
          <button
            onClick={(e) => {
              setMenuOpen(false)
              e.stopPropagation()
            }}
            aria-label="Fechar Menu"
            aria-hidden={!menuOpen}
            aria-haspopup
            aria-expanded={true}
            aria-controls="menu"
          >
            <Xmark role="none" />
          </button>
        </div>
      </div>
      <ul id="menu" className={clsx(styles["menu-content"], { open: menuOpen })} role="menu">
        <li className={styles["menu-item"]} role="none">
          <Link role="menuitem" to={canonicalPath.home}>
            Início
          </Link>
        </li>
        <li className={styles["menu-item"]} role="none">
          <Link role="menuitem" to={canonicalPath.tratamentos}>
            Tratamentos
          </Link>
        </li>
        <li className={styles["menu-item"]} role="none">
          <Link role="menuitem" to={canonicalPath.sobre}>
            Sobre
          </Link>
        </li>
        <li className={styles["menu-item"]} role="none">
          <Link role="menuitem" to={canonicalPath.contacto}>
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  )
}
