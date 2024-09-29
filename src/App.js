import "./App.css";
import MainSection from "./components/mainSection.js";

function App() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-transparent text-slate-700 text-sm sm:text-base">
      <div className="flex flex-col p-4">
        <section className="min-h-screen flex flex-col">
          <header>
            <h1>
              Free <span className="text-blue-400">Scribe</span>
            </h1>
            <button className="flex items-center gap-2">
              <p>New</p>
              <i className="fa-solid fa-plus"></i>
            </button>
          </header>
          <main className="flex-1"></main>
        </section>
        <MainSection />
        <footer></footer>
      </div>
    </div>
  );
}

export default App;
