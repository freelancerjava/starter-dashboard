import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/argon-dashboard-react.css";

import AdminLayout from "./layouts/Admin.js";
import AuthLayout from "./layouts/Auth.js";

export default function Dashboard() {
  return (
    <div className="dashboard-dashboard">
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard" render={props => <AdminLayout {...props} />} />
          <Route path="/auth" render={props => <AuthLayout {...props} />} />
          <Redirect from="/" to="/dashboard/index" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

Dashboard.propTypes = {};
Dashboard.defaultProps = {};
