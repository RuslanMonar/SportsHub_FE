import { BrowserRouter, Route, Switch } from "react-router-dom";
import Users from "./Pages/Admin/Users";

import { AuthPage } from "./Pages/Auth/Auth";
import { MainPage } from "./Pages/Main/Main";
import { Teams } from './Pages/Admin/Teams';
import TeamsFilter from "./Components/Admin/Teams/TeamFilter";
import ContactUs from "./Components/Navigation/Contactus";




function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/login" exact component={AuthPage} />
        <Route path="/register" exact component={AuthPage} />
        <Route path="/users" exact component={Users} />
        <Route path="/resetPassword" exact component={AuthPage} />
        <Route path="/resetPasswordAnswer" exact component={AuthPage} />
        <Route path="/recoveryPassword" exact component={AuthPage} />
        <Route path="/teams" exact component={Teams} />
        <Route path="/contactUs" exact component={ContactUs} />
        <Route path="/teamFilter" exact component={TeamsFilter} />
        
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
