import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <i class="fas fa-book"></i> Dictionary
        </header>
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
            </a>{" "}
            on
            <a
              href="https://github.com/LuciaTilnakova/dictionary-project"
              className="GitHub"
            >
              {" "}
              GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
