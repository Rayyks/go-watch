import { Routes, Route } from "react-router-dom";
// Components Import
import MovieContext from "./MovieContex";
import Panel from "./components/Panel";
import Container from "./components/Container";
import Details from "./components/Details";
// CSS import
import "./App.css";

function App() {
  return (
    <div className="App">
      <MovieContext>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Panel />
                <Container />
              </>
            }
          />
          <Route path="/movie">
            <Route path=":movieId" element={<Details />} />
          </Route>
        </Routes>
      </MovieContext>
    </div>
  );
}

export default App;
