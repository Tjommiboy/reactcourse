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

const App = () => {
  //add new job
  const addJob = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  //delete job

  const deleteJob = async (id) => {
    console.log("delete", id);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />)
        <Route path="/jobs" element={<JobsPage />} />)
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        )
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        )
        <Route path="*" element={<NotFound404 />} />)
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
