import "./App.css";

import { Route, Routes, useParams } from "react-router-dom";
import Navigation from "./Routes/Navigation/Navigation.component";
import Home from "./Routes/Home /Home.component";
export const All = () => {
  return <div>all component</div>;
};

function App() {
  const params = useParams();
  console.log("params", params);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="all" element={<All />} />
      </Route>
    </Routes>
  );
}

export default App;
