import React from "react"
import Transactions, {transactionLoader} from "./Transactions/Transactions"
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import Home from "./Home/Home"
import NotFound from "./NotFound/NotFound"
import Dashboard, {dashboardLoader} from "./Dashboard/Dashboard"
import RootLayout from "./layouts/RootLayout"
import Account from "./Account/Account"
import Budget, {budgetAction, budgetLoader} from "./Budget/Budget"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route
        path="/transactions"
        element={<Transactions />}
        loader={transactionLoader}
      />
      <Route path="/account" element={<Account />} />
      <Route
        path="/dashboard"
        element={<Dashboard />}
        loader={dashboardLoader}
      />
      <Route
        path="/budget"
        element={<Budget />}
        loader={budgetLoader}
        action={budgetAction}
      />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
)

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
