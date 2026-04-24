import { Link } from 'react-router';
import {
  DollarSign,
  ShoppingBag,
  TrendingUp,
  Package,
  ChefHat,
  LogOut,
  Menu as MenuIcon,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { mockOrders, SERVICE_FEE_PERCENTAGE } from '../../data/mockData';

export default function ProviderDashboard() {
  const { user, logout } = useAuth();

  const providerOrders = mockOrders.filter((order) => order.providerId === '1');
  const totalEarnings = providerOrders.reduce((sum, order) => sum + order.total, 0);
  const totalCommission = providerOrders.reduce((sum, order) => sum + order.commission, 0);
  const netIncome = totalEarnings - totalCommission;

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <ChefHat className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl text-primary">ElitePlates Provider</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <span className="text-sm">{user?.name?.[0]?.toUpperCase()}</span>
              </div>
              <span className="text-sm">{user?.name}</span>
            </div>
            <button
              onClick={logout}
              className="p-2 hover:bg-accent rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="mb-2">Dashboard Overview</h2>
          <p className="text-muted-foreground">Manage your catering business</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Total Orders</span>
              <Package className="w-5 h-5 text-primary" />
            </div>
            <p className="text-3xl mb-1">{providerOrders.length}</p>
            <p className="text-xs text-green-600 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              +12% from last month
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Total Earnings</span>
              <DollarSign className="w-5 h-5 text-primary" />
            </div>
            <p className="text-3xl mb-1">₹{totalEarnings}</p>
            <p className="text-xs text-muted-foreground">Before commission</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Commission Deducted</span>
              <ShoppingBag className="w-5 h-5 text-destructive" />
            </div>
            <p className="text-3xl mb-1">₹{totalCommission.toFixed(2)}</p>
            <p className="text-xs text-muted-foreground">{SERVICE_FEE_PERCENTAGE}% platform fee</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-border bg-gradient-to-br from-primary/10 to-primary/5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Net Income</span>
              <DollarSign className="w-5 h-5 text-primary" />
            </div>
            <p className="text-3xl text-primary mb-1">₹{netIncome.toFixed(2)}</p>
            <p className="text-xs text-muted-foreground">After commission</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to="/provider/menu"
            className="bg-white rounded-xl p-8 border border-border hover:shadow-lg transition-shadow group"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <MenuIcon className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              <div>
                <h3 className="mb-1">Manage Menu</h3>
                <p className="text-sm text-muted-foreground">Add or edit menu items</p>
              </div>
            </div>
          </Link>

          <Link
            to="/provider/orders"
            className="bg-white rounded-xl p-8 border border-border hover:shadow-lg transition-shadow group"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <Package className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              <div>
                <h3 className="mb-1">Manage Orders</h3>
                <p className="text-sm text-muted-foreground">Accept or reject orders</p>
              </div>
            </div>
          </Link>

          <Link
            to="/provider/earnings"
            className="bg-white rounded-xl p-8 border border-border hover:shadow-lg transition-shadow group"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <TrendingUp className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              <div>
                <h3 className="mb-1">Earnings Breakdown</h3>
                <p className="text-sm text-muted-foreground">View detailed earnings</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
