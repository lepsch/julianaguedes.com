import type { LinksFunction } from "react-router"
import { canonicalPath } from "../../canonical-path"
import { Page, WorkPlaces } from "../../componets"
import { BASE_URL } from "../../constants"
import { Cover } from "./Cover"
import { SendMessage } from "./SendMessage"
import styles from "./index.module.scss"

export const links: LinksFunction = () => [{ rel: "canonical", href: `${BASE_URL}${canonicalPath.contacto}` }]

function Contact() {
  return (
    <Page className={styles["Contact"]} hideSchedule header={<Cover />}>
      <SendMessage />
      <WorkPlaces />
    </Page>
  )
}

export default Contact
