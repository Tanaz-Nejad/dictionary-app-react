import Dictionary from "./Dictionary";
import dictionary_logo from "./dictionary_logo.png";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <img src={dictionary_logo} alt="Dictionary" className="logo" />
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultCity="Tea" />
        </main>
      </div>
    </div>
  );
}

export default App;
