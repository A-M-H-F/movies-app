import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Create from './pages/Create';
import MovieDetails from './pages/MovieDetails';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
/*
To Run JSON-Server locally 
  1- add this to package.json (choose your port)
      "start": "concurrently \"react-scripts start\" \"json-server --watch src/data/db.json --port 1998\""
  2- change the useFetch/Fetch URL in these files /pages (Create.jsx, Home.jsx, MovieDeatails.jsx) to:
      http://localhost:1998/movies
// yarn start
*/

function App() {

  return (
    <Router history={createHistory}>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/pages/create">
              <Create />
            </Route>
            <Route path="/movies/:id">
              <MovieDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
