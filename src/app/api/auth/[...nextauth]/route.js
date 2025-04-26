import clientPromise from "@/libs/mongoClient";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  secret: process.env.SECRET,
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const allowedEmails = ["robinkhan1122111@gmail.com", "anotheremail@example.com"]; // <-- your allowed emails

      if (allowedEmails.includes(user.email)) {
        return true; // Allow sign in
      } else {
        return false; // Deny sign in
      }
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
