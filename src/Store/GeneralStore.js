import { observable, action } from  'mobx'
import { createContext } from 'react'

export class GeneralStore {
    @observable name = "Dor"
    @observable age = "25"
    @observable email = "aba"

    @action handleInput = (name, value) => {
        this[name] = value
    } 
}

const GeneralStoreContext = createContext(GeneralStore)
export const GeneralStoreProvider = GeneralStoreContext.Provider
export default GeneralStoreContext