//+-When we use Next.js IS NOT necessary to Import Next.js because it is Imported by Default:_
//import React from "react"
import Container from "../Components/Container"
import Head from "next/head"
import fetch from "isomorphic-unfetch";
import Users from "../Components/Users";

export default function Index(props) {
  return (
    <>
      <Container>
        <Head>
          <title>Home - Next.js Tutorial</title>
        </Head>
          <h1>Hello World</h1>
          {/* {props.users[0].id} */}
          <Users users={props.users} />
      </Container>
    </>
  )
}

//+-Here is how we Import an A.P.I. in Next.js( https://nextjs.org/docs/basic-features/data-fetching ):_
Index.getInitialProps = async (ctx) => {
  const res = await fetch("https://reqres.in/api/users");
  const resJSON = await res.json();
  return {
    users: resJSON.data,
  };
};