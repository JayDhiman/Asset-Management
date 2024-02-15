import conf from '../conf/conf.js'

import { Client, Databases,ID, Storage,Query} from 'appwrite';

export class Services{
    client = new Client()
    databases;
    storage
    constructor(){
        this.client
        .setEndpoint(conf.appwiteURL)
        .setProject(conf.appwiteProjectID)
        this.databases = new Databases(this.client)
        this.storage = new Storage(this.client)

    }
    


}
const services = new Services()
export default services