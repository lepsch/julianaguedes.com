import type { LinksFunction } from "react-router"
import tratamentos from "../../assets/dra-juliana-guedes-tratamentos-collage.jpg"
import { canonicalPath } from "../../canonical-path"
import { Page } from "../../componets"
import { BASE_URL } from "../../constants"
import { Section } from "../tratamentos/Section"
import { Cover } from "./Cover"
import { SelfDisplay } from "./SelfDisplay"
import styles from "./index.module.scss"

export const links: LinksFunction = () => [{ rel: "canonical", href: `${BASE_URL}${canonicalPath.home}` }]

function Home() {
  return (
    <Page className={styles["Home"]} header={<Cover />}>
      <SelfDisplay />
      <Section
        alt="Colagem de fotos de tratamentos e Dra. Juliana Guedes"
        href="/tratamentos"
        id="tratamentos"
        name="Tratamentos"
        photo={tratamentos}
        reverse
        text="Ácido Hialurónico - Toxina Botulínica - Fios de PDO - Bioestimuladores
        de Colagénio - Dieta Cetogênica (PronoKal® / Proteifine®) - Peeling
        Químico - Microneedling - Consultas Médicas - Mesoterapia"
      />
    </Page>
  )
}

export default Home
