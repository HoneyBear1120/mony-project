import { lazy } from 'react'

// Pages
export const Home = lazy(() => import('./Pages/Home'))
export const GetStarted = lazy(() => import('./Pages/GetStarted'))
export const Blogs = lazy(() => import('./Pages/Blogs'))
export const BlogsDetails = lazy(() => import('./Pages/Blogs/BlogDetails'))
export const BuyMony = lazy(() => import('./Pages/BuyMony'))
export const BuyMonyNext = lazy(() => import('./Pages/BuyMony/BuyMonyNext'))
export const CustomerBenefits = lazy(() => import('./Pages/CustomerBenefits'))
export const MissionStatements = lazy(() => import('./Pages/MissionStatements'))
export const WalletFilter = lazy(() => import('./Pages/Wallet/WalletFilter'))
export const WalletMain = lazy(() => import('./Pages/Wallet'))
export const WalletNext = lazy(() => import('./Pages/Wallet/WalletNext'))

// Components
export const Header = lazy(() => import('./Components/Common/Header'))
export const Footer = lazy(() => import('./Components/Common/Footer'))
export const Information = lazy(() => import('./Components/Information'))
export const DepositMonyInformation = lazy(() =>
  import('./Components/DepositMonyInfo'),
)
export const Slider = lazy(() => import('./Components/Slider'))
