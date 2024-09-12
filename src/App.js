import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Company from "./pages/Company";
import Reviews from "./pages/Reviews";
import Contacts from "./pages/Contacts";

function App() {
   return <>
   <Header/>
   <Routes>
      <Route path="/" element={<Company/>}/>
      <Route path="/reviews" element={<Reviews/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
   </Routes>
   </>;
}

export default App;
