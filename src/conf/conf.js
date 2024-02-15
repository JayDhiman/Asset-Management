const conf = {
    appwiteURL: String(import.meta.env.VITE_APPWRITE_URL),
    appwiteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwiteDatabaseID: String(import.meta.env.VITE_APPWRITE_DATABSE_ID),
    appwiteCollectionID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID)

}

export default conf