import Navbar from "./navbar";
import Location from "./Location";
import JobModules from "./job.modules";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [jobtitle, setJobtitle] = useState("");
  const [location, setLocation] = useState("");
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("/jobs.json");
        setJobs(response.data);
        setIsLoading(false); // Set loading to false after fetching
        console.log("Fetched data ", response.data);
      } catch (error) {
        console.log(error);
        setIsLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchJobs();
  }, []);

  const handleJob = (query) => {
    setJobtitle(query);
  };

  // Search-based filtering
  const filteredJobs = jobs.filter((job) => {
    return job.position.toLowerCase().includes(jobtitle.toLowerCase());
  });

  return (
    <>
      <Navbar isLoading={isLoading} />
      <Location handleJob={handleJob} isLoading={isLoading} />
      <JobModules
        jobs={jobs}
        jobtitle={jobtitle}
        filteredJobs={filteredJobs}
        isLoading={isLoading}
      />
    </>
  );
};

export default Home;
