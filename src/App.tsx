import { Navbar } from "components/Navbar";
import { Gallery } from "./pages";

/**
 * React App component
 * @date 2022-06-01
 * @returns {ReactElement}
 *
 * @component
 * @example
 * return (<App/>)
 */
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
