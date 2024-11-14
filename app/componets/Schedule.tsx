import { Button } from "./Button"
import suaMelhorVersao from "../assets/dra-juliana-guedes-sua-melhor-versao.jpg"
import { canonicalPath } from "../canonical-path"
import styles from "./Schedule.module.scss"

export function Schedule() {
  return (
    <section className={styles["Schedule"]} aria-label="Agenda sua consulta">
      <div className={styles["text"]}>
        <p>Por uma beleza elegante e natural</p>
        <Button to={canonicalPath.contacto} theme={Button.Theme.dark}>
          Agenda sua consulta
        </Button>
      </div>
      <img alt="Dra. Juliana Guedes na Clínica Senhora-a-Branca" src={suaMelhorVersao} />
    </section>
  )
}
