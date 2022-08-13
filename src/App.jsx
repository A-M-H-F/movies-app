import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Refreshable } from 'react-router-refreshable'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Create from './pages/Create';
import MovieDetails from './pages/MovieDetails';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Refreshable>
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
          </Refreshable>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
