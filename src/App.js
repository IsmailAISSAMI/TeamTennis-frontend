import { BrowserRouter, Switch, Route } from "react-router-dom";
// PAGES
import Home from './pages/Home';
import Connexion from './pages/Connexion';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/connexion" exact component={Connexion} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/dashboard/clients" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
