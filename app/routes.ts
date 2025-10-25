// app/routes.ts
import type { ConfigRoute } from "@react-router/dev/config";

export default [
  // URL path "/" will render the component defined in app/welcome/welcome.tsx
  { path: "/", file: "welcome/welcome.tsx" },
] satisfies ConfigRoute[];
