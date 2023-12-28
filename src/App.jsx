import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Shop from "./pages/Shop";

function App() {
  return (
    <>
   <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
           <Route path="/" element={<HomePage/>}/>
           <Route path="/shop" element={<Shop/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
