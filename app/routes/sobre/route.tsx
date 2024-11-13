import type { LinksFunction } from "react-router"
import { canonicalPath } from "../../canonical-path"
import { Page, WorkPlaces } from "../../componets"
import { BASE_URL } from "../../constants"
import { Cover } from "./Cover"
import { Path } from "./Path"
import styles from "./index.module.scss"

export const links: LinksFunction = () => [{ rel: "canonical", href: `${BASE_URL}${canonicalPath.sobre}` }]

function About() {
  return (
    <Page className={styles["About"]} header={<Cover />}>
      <Path />
      <WorkPlaces />
    </Page>
  )
}

export default About
