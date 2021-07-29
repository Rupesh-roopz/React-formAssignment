import './App.css';
import { Home } from "./components/button"
import { List } from "./components/list"
import { Form } from "./components/form"
import { BrowserRouter, Route, Switch} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div>
      <Switch>
      <Route path="/form" component={Form}/>
      <Route path="/" component={Home}/>
      </Switch>
    </div>
    </BrowserRouter>  
  );
}

export default App;
