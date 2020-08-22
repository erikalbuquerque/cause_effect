import React from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import GlobalStyle from "./globalStyles.js";
import SummaryPane from "./components/SummaryPane";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/">
          <SummaryPane />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
