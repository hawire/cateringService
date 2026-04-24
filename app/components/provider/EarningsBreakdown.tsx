import { Link } from 'react-router';
import { ArrowLeft, TrendingUp, DollarSign } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { mockOrders, SERVICE_FEE_PERCENTAGE } from '../../data/mockData';

export default function EarningsBreakdown() {
  const providerOrders = mockOrders.filter((o) => o.providerId === '1');
  const totalEarnings = providerOrders.reduce((sum, order) => sum + order.total, 0);
  const totalCommission = providerOrders.reduce((sum, order) => sum + order.commission, 0);
  const netIncome = totalEarnings - totalCommission;

  const chartData = [
    {
      name: 'Total Earnings',
      amount: totalEarnings,
    },
    {
      name: 'Commission',
      amount: totalCommission,
    },
    {
      name: 'Net Income',
      amount: netIncome,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link
            to="/provider"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="mb-8">Earnings Breakdown</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Total Earnings</span>
              <DollarSign className="w-5 h-5 text-primary" />
            </div>
            <p className="text-3xl mb-1">₹{totalEarnings}</p>
            <p className="text-xs text-muted-foreground">
              From {providerOrders.length} orders
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Platform Commission</span>
              <TrendingUp className="w-5 h-5 text-destructive" />
            </div>
            <p className="text-3xl mb-1">₹{totalCommission.toFixed(2)}</p>
            <p className="text-xs text-muted-foreground">
              {SERVICE_FEE_PERCENTAGE}% of total earnings
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-border bg-gradient-to-br from-primary/10 to-primary/5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Net Income</span>
              <DollarSign className="w-5 h-5 text-primary" />
            </div>
            <p className="text-3xl text-primary mb-1">₹{netIncome.toFixed(2)}</p>
            <p className="text-xs text-muted-foreground">After commission deduction</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-border mb-8">
          <h3 className="mb-6">Earnings Chart</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#FF6B35" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl p-6 border border-border">
          <h3 className="mb-4">Order History</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm text-muted-foreground">Order ID</th>
                  <th className="text-left py-3 px-4 text-sm text-muted-foreground">Customer</th>
                  <th className="text-left py-3 px-4 text-sm text-muted-foreground">Date</th>
                  <th className="text-right py-3 px-4 text-sm text-muted-foreground">Total</th>
                  <th className="text-right py-3 px-4 text-sm text-muted-foreground">
                    Commission
                  </th>
                  <th className="text-right py-3 px-4 text-sm text-muted-foreground">
                    Net Earnings
                  </th>
                </tr>
              </thead>
              <tbody>
                {providerOrders.map((order) => (
                  <tr key={order.id} className="border-b border-border">
                    <td className="py-3 px-4">#{order.id}</td>
                    <td className="py-3 px-4">{order.customerName}</td>
                    <td className="py-3 px-4">{order.date}</td>
                    <td className="py-3 px-4 text-right">₹{order.total}</td>
                    <td className="py-3 px-4 text-right text-destructive">
                      -₹{order.commission.toFixed(2)}
                    </td>
                    <td className="py-3 px-4 text-right text-primary">
                      ₹{(order.total - order.commission).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
