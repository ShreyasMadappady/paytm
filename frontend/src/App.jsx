import { BrowserRouter, Route, Routes } from "react-router-dom";
import signin from "./scenes/signin";
import signUp from "./scenes/signUp";
import dashboard from "./scenes/dashboard";
import send from "./scenes/send";

function App() {
  return;
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/signin" Component={signin} />
        <Route path="/signup" Component={signUp} />
        <Route path="/dashboard" Component={dashboard} />
        <Route path="/send" Component={send} />
        <Route path="/" element={<send />} />
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
