import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router/Router";
import { useFetch } from "./hooks/use_fetch/use_fetch";
import { useCallback, useEffect, useState } from "react";
import {
  ErrorMessageContext,
  IsLoadingContext,
  MisdemeanoursContext,
} from "./context/MisdemeanoursContext";
import { Misdemeanour } from "./types/misdemeanours.types";

interface MisdemeanourData {
  misdemeanours: Misdemeanour[];
}

function App() {
  const [misdemeanours, setMisdemeanours] = useState<Misdemeanour[]>([]);

  const { isFetching, errorMessage, data } = useFetch<MisdemeanourData>(
    `http://localhost:8080/api/misdemeanours/10`
  );

  useEffect(() => {
    if (data) {
      setMisdemeanours([...data.misdemeanours]);
    }
  }, [data]);

  const updateMisdemeanours = useCallback((misdemeanours: Misdemeanour[]) => {
    setMisdemeanours((currentState) => {
      return [...currentState, ...misdemeanours];
    });
  }, []);

  return (
    <>
      <IsLoadingContext.Provider value={isFetching}>
        <ErrorMessageContext.Provider value={errorMessage}>
          <MisdemeanoursContext.Provider
            value={{ misdemeanours: misdemeanours, updateMisdemeanours }}
          >
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </MisdemeanoursContext.Provider>
        </ErrorMessageContext.Provider>
      </IsLoadingContext.Provider>
    </>
  );
}

export default App;
