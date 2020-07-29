import React, { useState } from "react";
import { Container } from "react-bootstrap";

import useFetchJobs from "./useFetchJobs";
import Job from "./Job";
import Pagination from "./Pagination";

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

  return (
    <Container className="my-4">
      <h1 className="mb-4">GitHub Jobs</h1>
      <Pagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Oops, an error occured. Try refreshing</h1>}
      {jobs.map((job) => {
        return <Job key={job.id} job={job} />;
      })}
      <Pagination page={page} setPage={setPage} hasNextPage={true} />
    </Container>
  );
}

export default App;
