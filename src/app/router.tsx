import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    lazy: async () => {
      const { LandingPage } = await import("../pages/landing");

      return { Component: LandingPage };
    },
  },
]);
