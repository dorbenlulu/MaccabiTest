import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import GeneralStoreContext, { GeneralStoreProvider, GeneralStore } from "./Store/GeneralStore";
import { ClientsStoreProvider, ClientsStore } from "./Store/ClientsStore";

const clientsStore = new ClientsStore()

ReactDOM.render(<ClientsStoreProvider value={clientsStore}><App /></ClientsStoreProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
