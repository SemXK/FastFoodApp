import * as Sentry from '@sentry/react-native';
import { Account, Avatars, Client, Databases, ID, Query, Storage } from 'react-native-appwrite';
import { User } from '../interfaces';
export const appwriteConfig = {
  // * General
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT as string,
  platform: process.env.EXPO_PUBLIC_APPWRITE_PLATFORM as string,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID as string,
  databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID as string,

  // * Buckets
  assetsBucketId: process.env.EXPO_PUBLIC_APPWRITE_BUCKET_ASSETS as string,
  
  // * Collections
  userCollectionId: process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_USERS as string,
  categoryCollectionId: process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_CATEGORY as string,
  menuCollectionId: process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_MENU as string,
  customizationCollectionId: process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_CUSTOMIZATIONS as string,
  menuCustomizationsCollectionId: process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_MENU_CUSTOMIZATIONS as string,  // m2m
}


export const client = new Client();

// *Appwrite Client Setup
client
  .setEndpoint(appwriteConfig.endpoint as string)
  .setProject(appwriteConfig.projectId as string)
  .setPlatform(appwriteConfig.platform as string)

export const account = new Account(client);
export const databases = new Databases(client)
export const avatars = new Avatars(client)
export const storage = new Storage(client);

// * Apis
export const createUser = async (
  payload:{email:string, password:string, name:string}
) =>{
  try{
    const newAccount = await account.create(
      ID.unique(),
      payload.email,
      payload.password,
      payload.name
    )

    if(!newAccount) throw new Error;

    const avatarUrl = avatars.getInitialsURL(payload.name)

    await signIn(payload)
    return await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        name: payload.name,
        email: payload.email, 
        accountId: newAccount.$id, 
        avatar: avatarUrl
      }
    )

  }
  catch(e: any) {
    Sentry.captureEvent(e)
    throw new Error(e as string)
  }
}

export const signIn = async (payload: Partial<User>) => {
  try {

    await account.createEmailPasswordSession(payload.email!, payload.password!);
  }
  catch (e:any) {
    Sentry.captureEvent(e)
    throw new Error(e as string);
  }
}

export const getCurrentUser = async ()  => {
  try{
    const currentAccount = await account.get();
    if(!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal('accountId', currentAccount.$id)]
    )
    if(!currentUser) throw Error

    return currentUser.documents[0]
  }
  catch(e: any){
    Sentry.captureEvent(e)
    throw new Error(e as string)
  }
}

export const getMenu = async( {category, query}: any) => {
  try {
    const queries: string[] = []
    if(category) queries.push(Query.equal('categories', category))
    if(query) queries.push(Query.search('name', query));
    const menus = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.menuCollectionId,
      queries
    )

    return menus
  }
  catch(e:any) {
    throw new Error(e.message as string)
  }
}
export const getCategories = async() => {
  try {

    const categories = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.categoryCollectionId,
    )
    return categories
  }
  catch(e:any) {
    throw new Error(e as string)
  }
}