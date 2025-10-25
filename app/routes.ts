// app/routes.ts
import type { RouteObject } from "react-router";
import Welcome from "./welcome/welcome";

export const routes: RouteObject[] = [
  { path: "/", element: <Welcome /> },

  // Add more pages later, e.g.:
  // { path: "/contact", element: <Contact /> },
];
