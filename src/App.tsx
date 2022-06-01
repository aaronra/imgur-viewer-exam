import { Navbar } from "components/Navbar";
import { Gallery } from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="wrapper">
        <div className="container">
          <Gallery />
        </div>
      </section>
    </div>
  );
}

export default App;
