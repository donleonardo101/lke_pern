import { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import MainComponent from "./MainComponent";

function App() {
  return (
    <Router>
      <Fragment>
      <header className="header">
        <div>To jest wielokontenerowa aplikacja</div>
        <Link to="/">Home</Link>
        <Link to="/otherpage">Nastepna strona</Link>
      </header>
      <div className="main">
        <Route exact path="/" component={MainComponent} />
        <Route path="/otherpage" component={OtherPage} />
      </div>
      </Fragment>
    </Router>
  );
}

export default App;
