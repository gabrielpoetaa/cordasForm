import { Form } from "./components/Form";
import "./styles/global.css";
import logo from "./assets/logoCordas.png";

function App() {
  return (
    <div className="space-y-8 flex flex-col">
      <div className="md:w-72 w-60 mx-auto">
        <img src={logo} alt="" />
      </div>
      <div className="max-w-[1000px] lg:mx-auto md:x-12 mx-auto space-y-32">
        <Form />
      </div>
    </div>
  );
}

export default App;
