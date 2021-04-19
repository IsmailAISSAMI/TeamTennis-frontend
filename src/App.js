import { BrowserRouter, Switch, Route } from "react-router-dom";
// PAGES
import Home from './pages/Home';
import Connexion from './pages/Connexion';
import Dashboard from './pages/Dashboard';
import ClientsDashboard from './pages/dashboard/Clients';
import AddClientsDashboard from './pages/dashboard/AddClients';
import Checkout from './pages/Checkout';



const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/connexion" exact component={Connexion} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/dashboard/clients" exact component={ClientsDashboard} />
        <Route path="/dashboard/clients/register" component={AddClientsDashboard} />
        <Route path="/checkout" exact component={Checkout} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
