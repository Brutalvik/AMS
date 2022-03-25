import classes from "./App.module.css";

//Components
import Home from "./Home/Home";

const App = () => {
  return (
    <div className={classes.main}>
      <header>h1 test</header>
      <div className={classes.body}>
        <Home />
      </div>
    </div>
  );
};

export default App;
