import "./styles.css";
import Logo from "./Logo";

export default function App() {
  return (
    <div className="App">
      <Logo />
      <h1>Welcome ReactJS</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h3>{1 + 1}</h3>
    </div>
  );
}
