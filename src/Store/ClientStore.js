import {action, observable} from 'mobx'


export class ClientStore {

    @observable fullName
    @observable age
    @observable email

    constructor(newClient) {
        this.fullName = newClient.fullName
        this.age = newClient.age
        this.email = newClient.email
    }
}