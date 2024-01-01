import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router/Router";
import { useFetch, FetchReturn } from "./hooks/use_fetch/use_fetch";
import { Misdemeanour } from "./types/misdemeanours.types";
import { createContext, useEffect, useState } from "react";

interface MisdemeanourData {
  misdemeanours: Misdemeanour[];
}

const misdemeanoursDefault = {
  isFetching: true,
  data: undefined,
  errorMessage: undefined,
};

export const MisdemeanoursContext =
  createContext<FetchReturn<MisdemeanourData>>(misdemeanoursDefault);

function App() {
  const [generationNumber, setGenerationNumber] = useState<number>(1);

  useEffect(() => {
    setGenerationNumber(Math.floor(Math.random() * (10 - 1) + 1));
  }, []);

  const misdemeanoursResponse = useFetch<MisdemeanourData>(
    `http://localhost:8080/api/misdemeanours/${generationNumber}`
  );

  return (
    <>
      <MisdemeanoursContext.Provider value={misdemeanoursResponse}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </MisdemeanoursContext.Provider>
    </>
  );
}

export default App;
