import Tests from "./components/tests/Tests";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
}from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./components/context/AuthContext";



function App() {
  
  const {user} = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Home/> 
         
        </Route>
        
        
      </Switch>
    </Router>
  );
};

export default App;