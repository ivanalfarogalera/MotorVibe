
import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import { Link, Route, Switch } from "wouter";

import SignIn from './pages/SignIn';
import SignUp from "./pages/SignUp";
import Perfil from "./pages/Perfil";
import MyRoutePage from "./pages/MyRoute";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import PerfilPage from "./pages/Perfil";

const HomePage = React.lazy(() => import("./pages/Home"));

export default function App() {
  return (

    <section className="App-content">
      <Header />
      <Link to="/">
      </Link>
      <Switch>
        <Route component={HomePage} path="/" />
        <Route component={SignInPage} path="/SignIn" />
        <Route component={SignUpPage} path="/SignUp" />
        <Route component={PerfilPage} path="/Perfil" />
        <Route component={MyRoutePage} path="/Route" />
      </Switch>
      <Footer />
    </section>
  );
}
