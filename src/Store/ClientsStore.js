import {action, observable} from 'mobx'
import {ClientStore} from './ClientStore'
import { createContext } from 'react'
export class ClientsStore {
    @observable list = []

    @action 
    addClient = (clientToAdd) => {
        this.list.push(new ClientStore(clientToAdd))
    }
}

const ClientsStoreContext = createContext(ClientsStore)
export const ClientsStoreProvider = ClientsStoreContext.Provider
export default ClientsStoreContext