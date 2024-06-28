import { render } from "@testing-library/react";
import JobCard from "./JobCard";
import { MemoryRouter } from "react-router-dom";
import CurrUserContext from "./CurrUserContext";


describe('JobCard Tests', () => {

  // JobCard Smoke Test:
  it('should render', () => {
    render(<MemoryRouter>
      <CurrUserContext.Provider value={{username: 'tester', applications: [15, 21, 84]}}>
            <JobCard 
              title='Tester' 
              companyName='Test Company' 
              salary={12000}
              equity={0.3}
              id={42} />
            </CurrUserContext.Provider>
            </MemoryRouter>)
  });
});