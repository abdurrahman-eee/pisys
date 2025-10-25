// app/routes.ts
import type { RouteObject } from "react-router";
import Welcome from "./welcome/welcome"; // <- your homepage

export const routes: RouteObject[] = [
  { path: "/", element: <Welcome /> },
  // { path: "/home", element: <Home /> }, // optional
];
