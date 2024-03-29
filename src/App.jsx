import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Dashboard from "./pages/Dashboard";
import Cabins from "./pages/Cabins";
import Bookings from "./pages/Bookings";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Account from "./pages/Account";
import Settings from "./pages/Settings";
import NewUsers from "./pages/Users";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./AppLayout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <Router>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />

              <Route path="booking" element={<Bookings />} />
              <Route path="setting" element={<Settings />} />
              <Route path="cabins" element={<Cabins />} />
              <Route path="account" element={<Account />} />
              <Route path="new" element={<NewUsers />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </Router>
        <Toaster
          position="top-center"
          containerStyle={{
            margin: "8px",
            maxWidth: "500px",
            fontSize: "16px",
            backgroundColor: "transparent",
            color: "var(--color-grey-700)",
            padding: "16px 24px",
          }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
          }}
          gutter={12}
          reverseOrder={false}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
