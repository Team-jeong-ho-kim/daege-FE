import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostPart from "./Post-part.jsx";
import Templete from "./Templete.jsx";
import TempleteCreate from "./TempleteCreate.jsx";
import PostView from "./Post-view.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/post/create/:id" element={<PostPart />} />
        <Route path="/post/:id" element={<PostView />} />
        <Route path="templete" element={<Templete />} />
        <Route path="templete/:id" element={<TempleteCreate />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
