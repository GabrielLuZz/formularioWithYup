import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";

const Routes = () => {
  const [autenticado, setAutenticado] = useState(false);

  return (
    <Switch>
      <Route exact path="/">
        <Register setAutenticado={setAutenticado} />
      </Route>
      <Route path="/welcome/:name">
        <Welcome autenticado={autenticado} />
      </Route>
    </Switch>
  );
};

export default Routes;
