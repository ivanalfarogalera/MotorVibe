
import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import { Link, Route, Switch } from "wouter";

import MyRoutesList from "./pages/MyRoutesList";
import MyRoutePage from "./pages/MyRoute";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import PerfilPage from "./pages/Perfil";
import NewRoutePage from "./pages/NewRoute";
import SearchedRoutePage from "./pages/SearchedRoute";

const HomePage = React.lazy(() => import("./pages/Home"));

export default function App() {
  return (

    <section className="App-content bg-info">
      <Header />
      <Link to="/">
      </Link>
      <Switch>
        <Route component={HomePage} path="/" />
        <Route component={SignInPage} path="/SignIn" />
        <Route component={SignUpPage} path="/SignUp" />
        <Route component={PerfilPage} path="/Perfil" />
        <Route component={MyRoutePage} path="/Ruta" />
        <Route component={MyRoutesList} path="/MisRutas" />
        <Route component={NewRoutePage} path="/NuevaRuta" />
        <Route component={SearchedRoutePage} path="/BuscaRuta" />
      </Switch>
      <Footer />
    </section>
  );
}
