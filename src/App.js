import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Routes/Navigation/Navigation.component";
import Home from "./Routes/Home /Home.component";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
