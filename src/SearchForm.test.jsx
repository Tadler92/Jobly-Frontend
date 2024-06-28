import { render } from "@testing-library/react";
import SearchForm from "./SearchForm";
import { MemoryRouter } from "react-router-dom";



describe('SearchForm Tests', () => {

  // SearchForm Smoke Test:
  it('should render', () => {
    render(
    <MemoryRouter>
      <SearchForm />
    </MemoryRouter>)
  });
});