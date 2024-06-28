import { render } from "@testing-library/react";
import EditProfile from "./EditProfile";
import { MemoryRouter } from "react-router-dom";
import CurrUserContext from "./CurrUserContext";


describe('EditProfile Tests', () => {

  // EditProfile Smoke Test:
  it('should render', () => {
    render(
    <MemoryRouter>
      <CurrUserContext.Provider value={{ currentUser: {
        user: {
          firstName: 'Test',
          lastName: 'User',
          email: 'test@test.com',
          password: ''
      }}}}>
        <EditProfile />
      </CurrUserContext.Provider>
    </MemoryRouter>)
  });
});