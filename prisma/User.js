import {db} from '@/app/helpers/server-helper'

export async function getUserByClerkId(clerkId) {
    const user = await db.user.findUnique({
        where : {
            clerkId : clerkId
        }
    })

    if(user){
        console.log('User found in the database')
        return user;
    }
    else{
        console.log('User doesnot exist in the database')
        return null;
    }
}