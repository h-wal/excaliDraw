import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios"

console.log("NextAuth route loaded");

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "example@example.com" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {

        console.log(credentials)
        // 1. Validate the data exists
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password");
        }

        const user = await axios.post("http://localhost:3008/signin",
            {
                email: credentials.email,
                password: credentials.password
            }
        )

        console.log(user)

        // 3. Return user object if valid
        if (user.status == 200) {
          return user; // must be an object, not null
        }

        // If login fails
        return null;
      },
    }),
  ],

  pages: {
    signIn: "/auth/signin", // 👈 Your custom sign-in page
  },

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
