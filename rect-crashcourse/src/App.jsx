import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFound404 from "./pages/NotFound404";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />)
      <Route path="/jobs" element={<JobsPage />} />)
      <Route path="/add-job" element={<AddJobPage />} />)
      <Route path="/jobs/:id" element={<JobPage />} loader={jobLoader} />)
      <Route path="*" element={<NotFound404 />} />)
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
