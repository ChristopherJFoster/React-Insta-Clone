import "./css/main.css";
import authenticate from "./authenticate/authenticate";
import Login from "./components/Login/Login";

const App = () => {};

export default authenticate(App)(Login);
