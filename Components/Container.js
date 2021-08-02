import Head from "next/head";
import Navigation from "./Navigation"

export default function Container(props) {
  return (
    <>
      <Head>
          <title>Next.js Tutorial</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/cyborg/bootstrap.min.css"/>
      </Head>
      <Navigation />
      <div className="container p-4">{props.children}</div>
    </>
  )
}