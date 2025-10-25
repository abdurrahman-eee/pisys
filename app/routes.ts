// app/routes.ts
import { createRoutesFromElements, Route } from "react-router";
import Welcome from "./welcome/welcome"; // <- your homepage

export const routes = createRoutesFromElements(
  <Route path="/" element={<Welcome />} />
);
