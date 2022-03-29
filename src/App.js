import classes from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Components
import Home from "./components/Home/Home";

const App = () => {
  return (
    <Router>
      <div className={classes.main}>
        <header>
          <h1>NAVBAR TO BE BUILT</h1>
        </header>
        <div className={classes.body}>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
