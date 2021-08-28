import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <small>
            Coded by{" "}
            <a
              href="https://brave-morse-fe6f9e.netlify.app/"
              className="mySite"
            >
              Lucia Tilnakova
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
