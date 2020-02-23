import React from 'react';
import './App.css';
import {observer} from 'mobx-react-lite'
import Form from './Components/Form'
// import Clients from './Components/Table/Clients'
import Clients from './Components/Table/Clients2'
import Header from './Components/Header'
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = observer(() => {

  return (
    <div className="App">
    <Router>
      <Header />
      <Route exact path="/" render={() => <Form />} />
      <Route exact path="/clients" render={() => <Clients />} />
    </Router>
    </div>
  );
})

export default App;
