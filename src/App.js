import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import './App.css';
import { Countries } from './pages/Countries';
import { Bookmarks } from './pages/Bookmarks';

function App() {
  
  return (
    <>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Button>
              <Link to="/">Countries</Link>
            </Button>
            <Button>
              <Link to="/bookmarks">Bookmarks</Link>
            </Button>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/" exact>
            <Countries/>
          </Route>
          <Route path="/bookmarks" exact>
            <Bookmarks/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
