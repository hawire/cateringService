import { Link } from 'react-router';
import { ArrowLeft, TrendingUp } from 'lucide-react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { mockOrders, mockProviders } from '../../data/mockData';

const monthlyData = [
  { month: 'Jan', orders: 45, revenue: 450 },
  { month: 'Feb', orders: 52, revenue: 520 },
  { month: 'Mar', orders: 61, revenue: 610 },
  { month: 'Apr', orders: 73, revenue: 730 },
];

const categoryData = [
  { name: 'Italian', value: 35 },
  { name: 'Indian', value: 28 },
  { name: 'BBQ', value: 22 },
  { name: 'Healthy', value: 15 },
];

const COLORS = ['#FF6B35', '#FFA987', '#FFD6A5', '#FFAB76'];

export default function Analytics() {
  const totalRevenue = mockOrders.reduce((sum, order) => sum + order.commission, 0);
  const totalOrders = mockOrders.length;
  const avgOrderValue = mockOrders.reduce((sum, order) => sum + order.total, 0) / totalOrders;

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link
            to="/admin"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-8">
          <TrendingUp className="w-6 h-6 text-primary" />
          <h2>Analytics Dashboard</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-border">
            <p className="text-sm text-muted-foreground mb-2">Total Revenue</p>
            <p className="text-3xl text-primary mb-1">₹{totalRevenue.toFixed(2)}</p>
            <p className="text-xs text-green-600 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              +18% from last month
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-border">
            <p className="text-sm text-muted-foreground mb-2">Total Orders</p>
            <p className="text-3xl mb-1">{totalOrders}</p>
            <p className="text-xs text-green-600 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              +12% from last month
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-border">
            <p className="text-sm text-muted-foreground mb-2">Avg Order Value</p>
            <p className="text-3xl mb-1">₹{avgOrderValue.toFixed(0)}</p>
            <p className="text-xs text-green-600 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              +8% from last month
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl p-6 border border-border">
            <h3 className="mb-6">Monthly Orders & Revenue</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="orders" stroke="#FF6B35" strokeWidth={2} />
                <Line type="monotone" dataKey="revenue" stroke="#FFA987" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-xl p-6 border border-border">
            <h3 className="mb-6">Orders by Category</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-border">
          <h3 className="mb-6">Provider Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mockProviders}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="reviews" fill="#FF6B35" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
