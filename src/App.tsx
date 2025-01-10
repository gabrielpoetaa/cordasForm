import { Cadastrar } from "./components/Form";
import "./styles/global.css";
import logo from "./assets/logoCordas.png";
import { LanguageSwitcher } from "./components/LanguageSwitcher";

function App() {
  return (
    <div className=" flex flex-col">
      <LanguageSwitcher />
      <div className="md:w-72 w-60 mx-auto">
        <img src={logo} alt="" />
      </div>
      <div className="max-w-[1000px] lg:mx-auto md:x-12 mx-auto space-y-32">
        <Cadastrar />
      </div>
    </div>
  );
}

export default App;
