import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Cabins from "./pages/Cabins";
import Bookings from "./pages/Bookings";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Account from "./pages/Account";
import Settings from "./pages/Settings";
import NewUsers from "./pages/Users";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="booking" element={<Bookings />} />
          <Route path="setting" element={<Settings />} />
          <Route path="cabins" element={<Cabins />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="account" element={<Account />} />
          <Route path="new" element={<NewUsers />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
