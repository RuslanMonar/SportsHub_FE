import { BrowserRouter, Route, Switch } from "react-router-dom";

import { RegisterPage } from "./Pages/Auth/Register";
import { MainPage } from "./Pages/Main/Main";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/register" exact component={RegisterPage} /> 

        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
