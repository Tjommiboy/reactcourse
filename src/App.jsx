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
import EditJobPage from "./pages/EditJobPage";

const App = () => {
  //add new job
  const baseUrl = "https://reactcourse-1-1kec.onrender.com"; // Your Render backend URL

  const addJob = async (newJob) => {
    const res = await fetch(`${baseUrl}/jobs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return res.json(); // optional, depends on your use case
  };

  const deleteJob = async (id) => {
    const res = await fetch(`${baseUrl}/jobs/${id}`, {
      method: "DELETE",
    });
    return res.ok;
  };

  const updateJob = async (job) => {
    const res = await fetch(`${baseUrl}/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    return res.json(); // optional
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
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
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
