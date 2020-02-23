import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import ClientsStoreContext from "../Store/ClientsStore";
import { withRouter } from "react-router-dom";
import axios from "axios";
// import Input from "@material-ui/core/Input";
// import FormControl from "@material-ui/core/FormControl";
// import Button from "@material-ui/core/Button";

const Form = observer(props => {
  const [state, setState] = useState({
    fullName: "",
    age: "",
    email: "",
    errorMessage: " "
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    console.log("in handleSubmit!");

    const { fullName, age, email } = state;

    if (age < 0) {
      setState({ ...state, errorMessage: "Age should be positive." });
      return
    }
    for (var propName in state) {
      if (!state[propName]) {
        setState({ ...state, errorMessage: propName + " can not be empty" });
        return;
      }
    }

    const clientToAdd = {
      fullName,
      age,
      email
    };

    await axios.post("http://localhost:4000/clients", clientToAdd);
    props.history.push("/clients");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type a name..."
          name="fullName"
          onChange={handleChange}
          value={state.fullName}
        />
        <input
          type="number"
          placeholder="Age"
          name="age"
          onChange={handleChange}
          value={state.age}
        />
        <input
          type="email"
          placeholder="Insert an email..."
          name="email"
          onChange={handleChange}
          value={state.email}
        />
        <button type="submit" variant="contained" color="primary">
          Submit
        </button>
      </form>
      <div style={{ color: "red" }}>{state.errorMessage}</div>
    </div>
  );
});

export default withRouter(Form);
