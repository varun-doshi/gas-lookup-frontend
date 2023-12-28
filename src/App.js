import "./App.css";
import logo from "./assets/gas-lookup-logo.png";
import Hero from "./components/Hero";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hero />
      </header>
      <Analytics />
    </div>
  );
}

export default App;
