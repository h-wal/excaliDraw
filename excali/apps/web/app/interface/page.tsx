import { getSession } from "../../lib/auth";

export default async function Interface(){
    const session = await getSession();
    const user = session?.user.email

    if (!session) {
        // Redirect or show a message if not logged in
        return (
          <div>
            <h1>You must be signed in to view this page.</h1>
            <a href="/auth/signin">Sign in</a>
          </div>
        );
      }

    console.log(session)
    return(
        <div>
            hi there, {user}
        </div>
    );
}