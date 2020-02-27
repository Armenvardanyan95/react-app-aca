import React, { createContext, useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import './App.css';
import { Countries } from './pages/Countries';
import { Bookmarks } from './pages/Bookmarks';
import { reducer, initialState } from './store/reducer'
import { Finances } from './pages/financial/Finances';

export const StoreContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  window.addEventListener(
    'beforeunload', 
    () => localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks)),
  );
  return (
    <StoreContext.Provider value={{state, dispatch}}>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Button>
              <Link to="/">Countries</Link>
            </Button>
            <Button>
              <Link to="/bookmarks">Bookmarks</Link>
            </Button>
            <Button>
              <Link to="/finances">Finances</Link>
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
          <Route path="/finances">
            <Finances/>
          </Route>
        </Switch>
      </Router>
    </StoreContext.Provider>
  );
}

export default App;
