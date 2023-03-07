import logo from "./logo.svg";
import "./App.css";
import { Mobile } from "./Mobile";
import { Password } from "./password";
import { Button } from "./button";
import { Heading } from "./Heading";

function App() {
  return (
    <form>
      <Heading Head={"Register here ..."} />
      <Mobile mobileNo={"Mobile ..."} />
      <Password pwd={"Password ..."} />
      <Button BtnName={"Submit"} />
    </form>
  );
}

export default App;
