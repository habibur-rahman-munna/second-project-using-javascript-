import { Outlet } from "react-router-dom"
import "./App.css";
import Header from './Layout/Header';
import Footer from './Layout/Footer';

function App() {

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App;
