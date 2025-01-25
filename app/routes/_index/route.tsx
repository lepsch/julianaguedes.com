import type { LinksFunction } from "react-router"
import tratamentos from "../../assets/dra-juliana-guedes-tratamentos-collage.jpg"
import { canonicalPath } from "../../canonical-path"
import { Page } from "../../componets"
import { BASE_URL } from "../../constants"
import { Section } from "../tratamentos/Section"
import { Cover } from "./Cover"
import { SelfDisplay } from "./SelfDisplay"
import styles from "./index.module.scss"
import procedures from "../tratamentos/procedures"

export const links: LinksFunction = () => [{ rel: "canonical", href: `${BASE_URL}${canonicalPath.home}` }]

function Home() {
  return (
    <Page className={styles["Home"]} header={<Cover />}>
      <SelfDisplay />
      <Section
        alt="Colagem de fotos de tratamentos e Dra. Juliana Guedes"
        to={canonicalPath.tratamentos}
        id="tratamentos"
        name="Tratamentos"
        photo={tratamentos}
        reverse
        text={procedures.map(({ name }) => name).join(" - ") + " - entre outros..."}
      />
    </Page>
  )
}

export default Home
