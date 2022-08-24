import React, { Suspense } from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'
import {
  Home,
  GetStarted,
  Blogs,
  BlogsDetails,
  BuyMony,
  BuyMonyNext,
  CustomerBenefits,
  MissionStatements,
  WalletFilter,
  WalletMain,
  WalletNext,
} from '../constant'
import MasterLayout from '../Layouts'

function Routings() {
  return (
    <>
      <HashRouter>
        <Suspense fallback={<div></div>}>
          <Routes>
            <Route element={<MasterLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/get-started" element={<GetStarted />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs-details" element={<BlogsDetails />} />
              <Route path="/buy-mony" element={<BuyMony />} />
              <Route path="/buy-mony-next" element={<BuyMonyNext />} />
              <Route path="/get-started" element={<GetStarted />} />
              <Route path="/customer-benefits" element={<CustomerBenefits />} />
              <Route
                path="/mission-statements"
                element={<MissionStatements />}
              />
              <Route path="/wallet" element={<WalletMain />} />
              <Route path="/wallet-next" element={<WalletNext />} />
              <Route path="/wallet-filter" element={<WalletFilter />} />
            </Route>
          </Routes>
        </Suspense>
      </HashRouter>
    </>
  )
}

export default Routings
