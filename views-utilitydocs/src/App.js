import React, { Component } from "react";
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Home from "./components/homePage/Home";
import Templates from "./components/Templates";
import Utility from "./components/templates/Utility";
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header></Header>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/template/:id" component={Templates}></Route>
          <Route path="/template/dafault/:id" component={Utility}></Route>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
