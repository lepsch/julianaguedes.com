import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router"
import type { LinksFunction, MetaFunction } from "react-router"
import { BASE_URL, DOMAIN } from "./constants"
// import type * as Route from "./+types.root"

import "normalize.css"
import "./styles.scss"
import { ParallaxProvider } from "react-scroll-parallax"

export const loader = () => {
  return {
    updatedTime: new Date().toISOString(),
  }
}

export const meta: MetaFunction<typeof loader> = ({ data }) => [
  ...(data ? [{ property: "og:updated_time", content: data.updatedTime }] : []),
]

export const links: LinksFunction = () => [{ rel: "icon", href: "/favicon.ico" }]

const title = "Dra. Juliana Guedes"
const subtitle = "Medicina Estética Avançada - Braga/Matosinhos"
const description =
  "Ácido Hialurónico - Toxina Botulínica - Fios de PDO - Bioestimuladores de Colagénio - Dieta Cetogênica (PronoKal® / Proteifine) - Peeling Químico - Microneedling - Consultas Médicas - Mesoterapia"
const ogImage = `${BASE_URL}/dra-juliana-guedes-social.jpg`

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#AA5050" />

        <title>{`${title} - ${subtitle}`}</title>
        <meta name="description" content={description} />

        <meta content={title} name="application-name" />
        <meta content="yes" name="mobile-web-app-capable" />
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta content="black-translucent" name="apple-mobile-web-app-status-bar-style" />
        <meta content={title} name="apple-mobile-web-app-title" />
        <meta content="#AA5050" name="msapplication-TileColor" />
        <meta content={ogImage} name="msapplication-TileImage" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={DOMAIN} />
        <meta property="twitter:url" content={BASE_URL} />
        <meta name="twitter:title" content={`${title} - ${subtitle}`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content={`${title} - Clínica Senhora a Branca`} />
        <meta property="og:image:width" content="1324" />
        <meta property="og:image:height" content="1324" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:locale" content="pt_PT" />
        <meta property="og:site_name" content={`${title} - ${subtitle}`} />
        <meta property="og:url" content={BASE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${title} - ${subtitle}`} />
        <meta property="og:description" content={description} />

        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />

        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html:
              'var tarteaucitronCustomText={alertBigPrivacy:"Este sítio usa cookies para fornecer alguns recursos básicos. Ao continuar a navegar neste sítio você concorda com o uso de cookies."};var tarteaucitronForceCDN="/tarteaucitronjs/";',
          }}
        ></script>
        <script src="/tarteaucitronjs/tarteaucitron.min.js"></script>
        <script src={TARTEAUCITRON_INIT_URL} />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html:
              'tarteaucitron.user.gtagUa = "G-1LG79LDQTT"; (tarteaucitron.job = tarteaucitron.job || []).push("gtag");',
          }}
        ></script>
        <Meta />
        <Links />
      </head>
      <body>
        <ParallaxProvider>{children}</ParallaxProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
