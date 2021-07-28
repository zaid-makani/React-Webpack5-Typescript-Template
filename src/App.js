import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import AuthContext from "./store/auth-context";

import Layout from "./components/Layout/Layout";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import AppointmentsPage from "./pages/AppointmentPage";

function App() {
  const authCtx = useContext(AuthContext);

  const { isLoggedIn } = authCtx;

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        {!isLoggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        {isLoggedIn && (
          <Route path="/profile">
            <ProfilePage />
          </Route>
        )}
        {isLoggedIn && (
          <Route path="/appointments">
            <AppointmentsPage />
          </Route>
        )}
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
