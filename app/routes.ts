// app/routes.ts
import { createRoutesFromElements, Route } from "react-router";
import Welcome from "./welcome/welcome";

export const routes = createRoutesFromElements(
  <Route path="/" element={<Welcome />} />
);
