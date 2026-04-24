import { Link } from 'react-router';
import {
  Users,
  ShoppingBag,
  DollarSign,
  TrendingUp,
  Settings,
  ChefHat,
  LogOut,
  BarChart3,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { mockOrders, mockProviders, SERVICE_FEE_PERCENTAGE } from '../../data/mockData';

export default function AdminDashboard() {
  const { user, logout } = useAuth();

  const totalRevenue = mockOrders.reduce((sum, order) => sum + order.commission, 0);
  const totalOrders = mockOrders.length;
  const totalProviders = mockProviders.length;

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <ChefHat className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl text-primary">ElitePlates Admin</h1>
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
          <h2 className="mb-2">Admin Dashboard</h2>
          <p className="text-muted-foreground">Manage platform operations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Total Orders</span>
              <ShoppingBag className="w-5 h-5 text-primary" />
            </div>
            <p className="text-3xl mb-1">{totalOrders}</p>
            <p className="text-xs text-green-600 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              +15% from last month
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Platform Revenue</span>
              <DollarSign className="w-5 h-5 text-primary" />
            </div>
            <p className="text-3xl mb-1">₹{totalRevenue.toFixed(2)}</p>
            <p className="text-xs text-muted-foreground">
              {SERVICE_FEE_PERCENTAGE}% commission
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Active Providers</span>
              <Users className="w-5 h-5 text-primary" />
            </div>
            <p className="text-3xl mb-1">{totalProviders}</p>
            <p className="text-xs text-green-600 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              +2 this month
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-border bg-gradient-to-br from-primary/10 to-primary/5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Commission Rate</span>
              <Settings className="w-5 h-5 text-primary" />
            </div>
            <p className="text-3xl text-primary mb-1">{SERVICE_FEE_PERCENTAGE}%</p>
            <p className="text-xs text-muted-foreground">Current platform fee</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to="/admin/users"
            className="bg-white rounded-xl p-8 border border-border hover:shadow-lg transition-shadow group"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <Users className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              <div>
                <h3 className="mb-1">Manage Users</h3>
                <p className="text-sm text-muted-foreground">View and manage all users</p>
              </div>
            </div>
          </Link>

          <Link
            to="/admin/transactions"
            className="bg-white rounded-xl p-8 border border-border hover:shadow-lg transition-shadow group"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <ShoppingBag className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              <div>
                <h3 className="mb-1">Transactions</h3>
                <p className="text-sm text-muted-foreground">View all orders and payments</p>
              </div>
            </div>
          </Link>

          <Link
            to="/admin/settings"
            className="bg-white rounded-xl p-8 border border-border hover:shadow-lg transition-shadow group"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <Settings className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              <div>
                <h3 className="mb-1">Platform Settings</h3>
                <p className="text-sm text-muted-foreground">Configure service fee</p>
              </div>
            </div>
          </Link>

          <Link
            to="/admin/analytics"
            className="bg-white rounded-xl p-8 border border-border hover:shadow-lg transition-shadow group"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <BarChart3 className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              <div>
                <h3 className="mb-1">Analytics</h3>
                <p className="text-sm text-muted-foreground">View detailed reports</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
