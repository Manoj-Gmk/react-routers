// Importing React and necessary hooks/components from react-router-dom
import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Jobs = () => {
  // useLoaderData hook retrieves data returned by the loader function
  const jobsdata = useLoaderData();

  return (
    <div>
      {/* Looping through the job data and rendering each job as a Link */}
      {jobsdata.map((job) => {
        return (
          <Link
            key={job.id} // Unique key for each job
            className="FromJson" // CSS class for styling
            to="#" // Optional: Add a valid route if needed
          >
            <h4>{job.title}</h4> {/* Display job title */}
            <h4>{job.location}</h4> {/* Display job location */}
          </Link>
        );
      })}
    </div>
  );
};

export default Jobs;

// Loader function to fetch job data before rendering the Jobs component
export const jobloader = async () => {
  const res = await fetch("http://localhost:3031/jobs"); // Fetching data from JSON server or API
  return res.json(); // Parsing and returning the JSON response
};
