import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";

import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import Blog from './Components/Blog';


function App() {
  return (
    <div className="app">
      <Switch >
        <Route exact path="/" component={SignUp} />
        <Route path="/login" component={LogIn} />
        <Route path="/home" component={Home} />
        <Route path="/blog" component={Blog} />
        <Redirect to="/login" />
      </Switch>
    </div>
  );
}

export default App;
