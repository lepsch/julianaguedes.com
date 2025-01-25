import type { LinksFunction } from "react-router"
import { BASE_URL } from "../../constants"
import { Page } from "../../componets"
import { canonicalPath } from "../../canonical-path"
import { Cover } from "./Cover"
import { Section } from "./Section"
import styles from "./index.module.scss"
import procedures from "./procedures"

export const links: LinksFunction = () => [{ rel: "canonical", href: `${BASE_URL}${canonicalPath.sobre}` }]

function Procedures() {
  return (
    <Page className={styles["Procedures"]} header={<Cover />}>
      {procedures.map(({ alt, id, name, photo, text }, index) => (
        <Section alt={alt} id={id} key={id} name={name} photo={photo} reverse={index % 2 === 0} text={text} />
      ))}
    </Page>
  )
}

export default Procedures
