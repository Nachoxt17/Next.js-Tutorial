/**+-Pages like this one that aren't the Main "Index" Page will appear in the extra part of the URL "www.website.com/*this-part*" by Default,
 like if we were using React-Routes:_ */
import Head from "next/head"
import Container from "../Components/Container"

export default function About() {
  return (
    <div>
      <Container>
          <Head>
            <title>About - Next.js Tutorial</title>
          </Head>
          <h1>About</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur officia repellat ipsum, voluptatibus ab mollitia deserunt
          cupiditate recusandae culpa unde suscipit dolor vitae dicta porro veritatis cum tempore voluptatum doloribus?</p>
      </Container>
    </div>
  )
}