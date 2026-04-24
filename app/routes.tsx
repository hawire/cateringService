import { createBrowserRouter } from 'react-router';
import Landing from './components/Landing';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import CustomerHome from './components/customer/CustomerHome';
import ProviderDetail from './components/customer/ProviderDetail';
import OrderPage from './components/customer/OrderPage';
import PaymentPage from './components/customer/PaymentPage';
import OrderHistory from './components/customer/OrderHistory';
import ProviderDashboard from './components/provider/ProviderDashboard';
import MenuManagement from './components/provider/MenuManagement';
import OrderManagement from './components/provider/OrderManagement';
import EarningsBreakdown from './components/provider/EarningsBreakdown';
import AdminDashboard from './components/admin/AdminDashboard';
import UserManagement from './components/admin/UserManagement';
import Transactions from './components/admin/Transactions';
import Settings from './components/admin/Settings';
import Analytics from './components/admin/Analytics';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/customer',
    element: <CustomerHome />,
  },
  {
    path: '/customer/provider/:id',
    element: <ProviderDetail />,
  },
  {
    path: '/customer/order/:id',
    element: <OrderPage />,
  },
  {
    path: '/customer/payment',
    element: <PaymentPage />,
  },
  {
    path: '/customer/orders',
    element: <OrderHistory />,
  },
  {
    path: '/provider',
    element: <ProviderDashboard />,
  },
  {
    path: '/provider/menu',
    element: <MenuManagement />,
  },
  {
    path: '/provider/orders',
    element: <OrderManagement />,
  },
  {
    path: '/provider/earnings',
    element: <EarningsBreakdown />,
  },
  {
    path: '/admin',
    element: <AdminDashboard />,
  },
  {
    path: '/admin/users',
    element: <UserManagement />,
  },
  {
    path: '/admin/transactions',
    element: <Transactions />,
  },
  {
    path: '/admin/settings',
    element: <Settings />,
  },
  {
    path: '/admin/analytics',
    element: <Analytics />,
  },
]);
