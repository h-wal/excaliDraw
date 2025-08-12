import { getSession } from "../../lib/auth";

export default async function Interface(){
    const session = await getSession();
    const user = session?.user.name

    if (!session) {
        return (
          <div>
            <h1>You must be signed in to view this page.</h1>
            <a href="/auth/signin">Sign in</a>
          </div>
        );
      }

    return(
        <div>
            hi there, {user}
        </div>
    );
}