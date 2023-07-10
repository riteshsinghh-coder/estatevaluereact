import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Forget from "./pages/Forget";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Header from "./component/Header"
function App() {
  return (
    <><Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/forget" element={<Forget/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/sign-in" element={<Signin/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path="/offers" element={<Offers/>}/>
        </Routes></Router></>
  );
}

export default App;
