import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { db } from "@/app/helpers/server-helper"
import { compare } from "bcryptjs"
import GoogleProvider from 'next-auth/providers/google'



export const authOptions = {
    adapter : PrismaAdapter(db),
    secret : process.env.NEXTAUTH_SECRET,
    session : {
        strategy : 'jwt'
    },
    pages: {
        signIn : '/signIn'
    },
    providers: [
        CredentialsProvider({
          // The name to display on the sign in form (e.g. 'Sign in with...')
          name: 'Credentials',
          // The credentials is used to generate a suitable form on the sign in page.
          // You can specify whatever fields you are expecting to be submitted.
          // e.g. domain, username, password, 2FA token, etc.
          // You can pass any HTML attribute to the <input> tag through the object.
          credentials: {
            email: { label: "Email", type: "email", placeholder: "jsmith" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials) {
            
            if(!credentials?.email || !credentials?.password){
                return null
            }
            console.log(credentials.email, credentials.password)
            const existingUser = await db.user.findUnique({where: {email : credentials.email}})
            console.log(existingUser)
            if(!existingUser) return null
            const passwordMatch = await compare(credentials.password, existingUser.hashedPassword)
            console.log(passwordMatch)
            if(!passwordMatch) return null
            return {
                id : existingUser.id,
                name : existingUser.firstName,
                email : existingUser.email
            }
          }
        }),
        GoogleProvider({
            clientId : process.env.GOOGLE_CLIENT_ID,
            clientSecret : process.env.GOOGLE_CLIENT_SECRET
        })
      ],
      callbacks: {
        async jwt ({token,user,account,profile,isNewUser}){
            if(user){
              token.id = user.id;
              token.email = user.email;
              token.name = user.name;
            }
            // console.log("JWT token:", token);
            return token;
        },
        async session({session,user,token}){
          if (token) {
            session.user.id = token.id;
            session.user.email = token.email;
            session.user.name = token.name;
          }
          // console.log("Session:", session); 
          return session;
        },
        // async signIn({profile}){
        //     if(!profile?.email){
        //         throw new Error("No Profile")
        //     }
        //     console.log(profile)
        //     const existingUser = await db.user.findUnique({
        //         where : {
        //             email : profile.email
        //         }
        //     })
        //     if(existingUser){
        //         throw new Error("User with this email already exists");
        //     }
        //     const newUser = await db.user.create({
        //         email : profile.email,
        //         firstName : profile.given_name,
        //         lastName : profile.family_name
        //     })
        //     return true
        // }
      }
}