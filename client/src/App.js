import logo from './logo.svg';
import './App.css';

import React, { Suspense } from "react";
import { Link, Route, Switch } from "wouter";

import SignIn from './pages/SignIn';

const HomePage = React.lazy(() => import("./pages/SignIn"));

export default function App() {
  return (
    <div className="App">
      <Route component={SignIn} path="/" />
    </div>
  );
}
