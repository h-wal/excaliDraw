import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "email",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "username" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.username || !credentials?.password) return null;

                // Example: Replace with real DB check later
                if (credentials.username === "test" && credentials.password === "1234") {
                    return { id: "1", name: "Test User", email: "test@example.com" };
                }
                return null;
            }
        })
    ],
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "auth/signin", // 👈 custom sign-in UI
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
            session.user.id = token.id;
            session.user.email = token.email;
            return session;
        }
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
