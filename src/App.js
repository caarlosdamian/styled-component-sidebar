import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
          <Sidebar />
      </Switch>
    </Router>
  );
}

export default App;
