import { render } from "@testing-library/react";
import Home from "./Home";
import CurrUserContext from "./CurrUserContext";
import { MemoryRouter } from "react-router-dom";


describe('Home Tests', () => {

  // Home Smoke Test:
  it('should render', () => {
    render(
      <MemoryRouter>
        <CurrUserContext.Provider value={{currentUser: null}}>
          <Home />
        </CurrUserContext.Provider>
      </MemoryRouter>
    )
  });
});