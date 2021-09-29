import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to='/signIn'/>
            </Route>
            <Route path="/signIn" component={SignIn}/>
            <Route path="/signUp" component={SignUp}/>
          </Switch>
        </Router>
      </Layout>
    </div>
  );
}

export default App;