import Button from "./Button";
import appStyle from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={appStyle.title}>Welcome back!!!!!!!!</h1>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
