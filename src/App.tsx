import { Cadastrar } from "./components/Cadastrar";
import "./styles/global.css";
import logo from "./assets/logoCordas.png";

function App() {
  return (
    <div className="space-y-12 flex flex-col">
      <div className="md:w-72 w-60 mx-auto">
        <img src={logo} alt="" />
      </div>
      <div className="max-w-[1000px] lg:mx-auto md:x-12 mx-auto">
        <Cadastrar />;
      </div>
    </div>
  );
}

export default App;
