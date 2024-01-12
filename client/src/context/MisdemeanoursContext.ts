import { createContext } from "react";
import { Misdemeanour } from "../types/misdemeanours.types";

export const MisdemeanoursContext = createContext<{
  misdemeanours: Misdemeanour[];
  updateMisdemeanours: (misdemeanours: Misdemeanour[]) => void;
}>({ misdemeanours: [], updateMisdemeanours: () => {} });

export const IsLoadingContext = createContext<boolean>(false);
export const ErrorMessageContext = createContext<string | undefined>(undefined);
