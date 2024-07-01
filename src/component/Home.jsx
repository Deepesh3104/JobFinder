import Navbar from "./navbar";
import Location from "./Location";
import JobModules from "./job.modules";
import { useState, useEffect } from "react";
import axios from "axios";
const Home = () => {
  const [jobtitle, setJobtitle] = useState("");
  const [location, setLocation] = useState("");
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("./src/component/jobs.json");
        setJobs(response.data);
        console.log("Fetched data ", response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchJobs();
  }, []);

  const handleJob = (query) => {
    setJobtitle(query);
  };
  const filteredJobs = jobs.filter((job) => {
    return job.position.toLowerCase().includes(jobtitle.toLowerCase());
  });
  return (
    <>
      <Navbar />
      <Location handleJob={handleJob} />
      <JobModules jobs={jobs} jobtitle={jobtitle} filteredJobs={filteredJobs} />
    </>
  );
};
export default Home;
