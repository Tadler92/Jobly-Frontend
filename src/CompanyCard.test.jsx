import { render } from "@testing-library/react";
import CompanyCard from "./CompanyCard";
import { MemoryRouter } from "react-router-dom";
import { describe } from "vitest";


describe('CompanyCard Tests', () => {
  // CompanyCard Smoke Test:
  it('should render', () => {
    render(<MemoryRouter>
            <CompanyCard 
              handle='test' 
              name='Test Company' 
              description='Test for company card' />
            </MemoryRouter>)
  });
});