
import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import { Link, Route, Switch } from "wouter";

import SignIn from './pages/SignIn';
import SignUp from "./pages/SignUp";
import Perfil from "./components/Perfil";

const HomePage = React.lazy(() => import("./pages/Home"));

export default function App() {
  return (

    <section className="App-content">
      <Header />
      <Link to="/">
      </Link>
      <Switch>
        <Route component={HomePage} path="/" />
        <Route component={SignIn} path="/SignIn" />
        <Route component={SignUp} path="/SignUp" />
        <Route component={Perfil} path="/Perfil" />
      </Switch>
      <Footer />
    </section>
  );
}
