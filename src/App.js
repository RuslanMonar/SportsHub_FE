import { BrowserRouter, Route, Switch } from "react-router-dom";
import Users from "./Pages/Admin/Users";

import { AuthPage } from "./Pages/Auth/Auth";
import { MainPage } from "./Pages/Main/Main";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/login" exact component={AuthPage} />
        <Route path="/register" exact component={AuthPage} />
        <Route path="/users" exact component={Users} />
        <Route path="/resetPassword" exact component={AuthPage} />
        <Route path="/recoveryPassword" exact component={AuthPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
