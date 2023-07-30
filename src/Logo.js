import logo from "./logo.svg";
const number1 = 1;
const number2 = 2;
function Logo() {
  return (
    <div>
      <img src={logo} alt="some-logo" width="50" />
      <p> {`Hello, ${number1} ${number2}`} </p>
    </div>
  );
}

export default Logo;
