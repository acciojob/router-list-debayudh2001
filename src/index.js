import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Item from "./components/Item";



ReactDOM.render(
<BrowserRouter>
   <Routes>
       <Route path="/" element={<App />} />
       <Route path="/items/:id" element={<Item />}/>
   </Routes>
</BrowserRouter>, document.getElementById("root"));
