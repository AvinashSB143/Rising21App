import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';
import Login from "./Login"



function App() {
  return (
    <Switch>
    <div className="App">
        <Route path="/">
      <Redirect to="/login" />
      </Route>
        <Route path="/login">
      <Login />
      </Route>
    </div>
    </Switch>
  );
}

export default App;
