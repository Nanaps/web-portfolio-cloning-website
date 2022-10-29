import "./App.css";
import picture from "./picture/Home.png";
import logo from "./picture/Group.png";
import git from "./picture/Git.png";
import linkedin from "./picture/Linkedin.png";
import instagram from "./picture/Instagram.png";

function App() {
  return (
    <div className="Container w-[1920px] h-[1080px] ">
      <div className="Navbar w-[100%] h-[180px] flex flex-row justify-start space-x-[300px] items-between ">
        <div className=" logo w-[282px] h-[42px] m-[30px] flex flex-row space-x-[15px] mt-[50px] ml-[210px]">
          <img src={logo} />
          <p className="text-[24px] font-black text-[#263138]">
            Matheus Campos
          </p>
        </div>
        <ul className=" Navbox flex flex-row justify-end space-x-[100px] items-between mt-[50px]">
          <li className="m-[10px] w-[51px] h-[23px] text-[20px]">home</li>
          <li className="m-[10px] w-[51px] h-[23px] text-[20px]">sobre</li>
          <li className="m-[10px] w-[51px] h-[23px] text-[20px]">portifólio</li>
          <li className="m-[10px] w-[51px] h-[23px] text-[20px]">serviços</li>
          <li className="m-[10px] w-[51px] h-[23px] text-[20px]">resumo</li>
          <li className="m-[10px] w-[51px] h-[23px] text-[20px]">contato</li>
        </ul>
      </div>
      <div className="Bodybox w-[100%] h-[689px] flex flex-row justify-center space-x-[80px]">
        <div className="Leftbox w-[705px] h-[689px]  flex flex-col space-y-[140px] justify-center items-between">
          <div className="content">
            <p className="text-[24px]">Olá pessoas, </p>
            <h1 className="text-[72px] font-black">EU SOU UM PROGRAMADOR</h1>
            <p className="text-[24px]">
              Seja bem-vindo ao meu portifólio website
            </p>
          </div>
          <button className="w-[310px] h-[65px] rounded-[20px] bg-[#263138] text-[#FFFFFF] font-black">
            Saiba mais sobre mim
          </button>
          <div className="icon flex flex-row space-x-[25px]">
            <img src={git} />
            <img src={linkedin} />
            <img src={instagram} />
          </div>
        </div>
        <div className="Rightbox w-[705px] h-[689px]">
          <img src={picture} />
        </div>
      </div>
    </div>
  );
}

export default App;
