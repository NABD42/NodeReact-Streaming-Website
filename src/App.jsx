import "./app.scss"
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Watch from "./pages/watch/Watch";
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
       </Route>
      <Route path="/register">
          <Register/>
       </Route>
      <Route path="/login">
          <Login/>
       </Route>
      <Route path="/movies">
        <Home type="movies"/>
      </Route>
      <Route path="/series">
        <Home type="series"/>
      </Route>
      <Route path="/watch">
        <Watch/>
      </Route>
    </Switch>
  </Router> 
  );
};

export default App;