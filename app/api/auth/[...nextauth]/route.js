import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from "next-auth/providers/github";
import mongoose from 'mongoose';
import User from '@/app/model/user';
import payment from '@/app/model/payment';
import connectDB from '@/app/db/connectDb'; 


const Auth = NextAuth({
   secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),

  ],
  callbacks: {
    async signIn({ user, account, profile }) {
       const email = user?.email || profile?.email;
      if (!email) return false;

      if ( account.provider == "google" || account.provider == "github") {
        await connectDB()
        const currentUser = await User.findOne({email})

        if(!currentUser){
          const newUser = await User.create({
            email,
            username:email.split("@")[0],    
          })
        
        }   
        
        return true;
      }
      return true;
    },
      async session({ session, user, token }) {
        const dbUser= await User.findOne({email: session.user.email})
        session.user.name = dbUser.username;
         session.user.id = dbUser._id;
      return session
    },
  },
  
})

  

export { Auth as GET, Auth as POST }