import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './resources/js/Pages/Booking/Home'
import Register from './resources/js/Pages/Auth/Register'
import Login from './resources/js/Pages/Auth/Login'
import TopNav from "./resources/js/Components/TopNav";

const App = () => {
  return (
    <BrowserRouter>
    <TopNav/>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/register" component={Register}></Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
