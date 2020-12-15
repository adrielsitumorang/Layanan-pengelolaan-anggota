import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Routes from "./routes/rute";
import Pages from "./pages/pages-common";
import React from 'react';

function App(){
  return (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path={Routes.home}>
          <Pages.HalamanUtama/>
        </Route>
        <Route path={Routes.tambahAnggota}>
          <Pages.TambahAnggota/>
        </Route>
        <Route path={Routes.ubahAnggota}>
          <Pages.UbahData/>
        </Route>
      </Switch>
    </Router>
  </div>
  );
}

export default App;
