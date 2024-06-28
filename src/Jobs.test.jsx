import { render } from "@testing-library/react";
import Jobs from "./Jobs";
import JoblyApi from './api'
import { MemoryRouter } from "react-router-dom";


describe('Jobs Tests', () => {

  beforeEach(() => {
    JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
      "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
      "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";
  });

  // Jobs Smoke Test:
  it('should render', () => {
    render(
    <MemoryRouter>
      {console.log(JoblyApi.token)}
      <Jobs />
    </MemoryRouter>)
  });
});