import { Cadastrar } from "./components/Cadastrar";
import "./styles/global.css";
import logo from "./assets/logoCordas.png";

function App() {
  return (
    <div className="space-y-12 w-full">
      <div className="md:w-72 w-60 mx-auto">
        <img src={logo} alt="" />
      </div>
      <div className="xmax-w-[1000px] lg:mx-auto md:x-12 mx-auto">
        <Cadastrar />;
      </div>
    </div>
  );
}

export default App;
