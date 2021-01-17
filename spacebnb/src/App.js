
import './App.css';
import Home from './Home';
import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';
import SearchPage from './SearchPage'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (

    <div className="app">
      <Router>
      {/* <h1>Spacebnb🚀</h1> */}
        <Header />

        <Switch>

          <Route path="/search">
            <SearchPage />
          </Route>
          
          <Route path="/">
            <Home />
          </Route>

        </Switch>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
