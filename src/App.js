import classes from "./App.module.css";

//Components
import Home from "./components/Home/Home";

const App = () => {
  return (
    <div className={classes.main}>
      <header>
        <h1>NAVBAR TO BE BUILT</h1>
      </header>
      <div className={classes.body}>
        <Home />
      </div>
    </div>
  );
};

export default App;
