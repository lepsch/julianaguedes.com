import styles from "./Cover.module.scss"
import procedures from "./procedures"

export function Cover() {
  return (
    <header className={styles["Cover"]}>
      <nav className={styles["title-container"]} aria-labelledby="tratamentos-title">
        <h1 id="tratamentos-title" className={styles["title"]}>
          Tratamentos
        </h1>
        <ul role="menu">
          {procedures.map(({ id, name }) => (
            <li role="none" key={id}>
              <a role="menuitem" href={`#${id}`}>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
