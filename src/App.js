import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// Components Import
import { MovieProvider } from "./MovieContext";
import Panel from "./components/Panel";
import Container from "./components/Container";
import Details from "./components/Details";

// Loader Import
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    <Loader />;
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <MovieProvider>
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
        </MovieProvider>
      )}
    </div>
  );
}

export default App;
