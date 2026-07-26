import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import { router } from "@/app/router";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;