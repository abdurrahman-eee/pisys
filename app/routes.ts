// app/routes.ts
import type { RouteObject } from "react-router";
import React from "react";
import Welcome from "./welcome/welcome";

export const routes: RouteObject[] = [
  { path: "/", element: React.createElement(Welcome) },
];
