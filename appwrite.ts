export const appwriteConfig = {
  // * General
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  platform: process.env.EXPO_PUBLIC_APPWRITE_PLATFORM,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,

  // * Collections
  userCollectionId: process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_USERS
}