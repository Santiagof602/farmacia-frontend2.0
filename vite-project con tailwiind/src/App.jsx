import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
}

export default App;
