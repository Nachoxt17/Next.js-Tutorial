//+-The files with the names with THIS "[***].js" Style of Writing are Dynamic Sub-Pages, in this example is Represents the User's Profile Page:_
//+-(This Pages will appear in the Sub-URLs in "https://www.***/users/*userId*").
import { useRouter } from 'next/router';
import fetch from "isomorphic-unfetch";

import Container from "../../components/Container";

export default function User({ user }) {
  const {id} = useRouter().query;

  return (
    <Container>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header text-center">
              <img
                src={user.avatar}
                alt={user.first_name + " " + user.last_name}
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="card-body text-center">
              <h3>
                {user.id}. {user.first_name} {user.last_name}
              </h3>
              <p>Email: {user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

User.getInitialProps = async (ctx) => {
  // console.log(ctx.query.id)
  const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`);
  const resJSON = await res.json();
  // console.log(resJSON);
  return { user: resJSON.data };
};