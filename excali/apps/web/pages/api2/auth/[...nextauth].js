import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "email",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // TEMP: Just log credentials
        console.log(credentials.username, credentials.password);

        // Example hardcoded user
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };

        return user || null;
      }
    })
  ],
  session: {
    strategy: "jwt",
  }
});
