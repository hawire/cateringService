import { Link } from 'react-router';
import { ArrowLeft, Download } from 'lucide-react';
import { mockOrders } from '../../data/mockData';

export default function Transactions() {
  const totalRevenue = mockOrders.reduce((sum, order) => sum + order.commission, 0);
  const totalOrderValue = mockOrders.reduce((sum, order) => sum + order.total, 0);

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            to="/admin"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </Link>
          <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="mb-8">All Transactions</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-border">
            <p className="text-sm text-muted-foreground mb-2">Total Order Value</p>
            <p className="text-3xl">₹{totalOrderValue}</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-border">
            <p className="text-sm text-muted-foreground mb-2">Platform Revenue</p>
            <p className="text-3xl text-primary">₹{totalRevenue.toFixed(2)}</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-border">
            <p className="text-sm text-muted-foreground mb-2">Total Transactions</p>
            <p className="text-3xl">{mockOrders.length}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left py-4 px-6 text-sm">Order ID</th>
                  <th className="text-left py-4 px-6 text-sm">Provider</th>
                  <th className="text-left py-4 px-6 text-sm">Customer</th>
                  <th className="text-left py-4 px-6 text-sm">Date</th>
                  <th className="text-right py-4 px-6 text-sm">Order Value</th>
                  <th className="text-right py-4 px-6 text-sm">Commission (10%)</th>
                  <th className="text-left py-4 px-6 text-sm">Status</th>
                </tr>
              </thead>
              <tbody>
                {mockOrders.map((order, idx) => (
                  <tr key={order.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-accent/30'}>
                    <td className="py-4 px-6">#{order.id}</td>
                    <td className="py-4 px-6">{order.providerName}</td>
                    <td className="py-4 px-6">{order.customerName}</td>
                    <td className="py-4 px-6">{order.date}</td>
                    <td className="py-4 px-6 text-right">₹{order.total}</td>
                    <td className="py-4 px-6 text-right text-primary">
                      ₹{order.commission.toFixed(2)}
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`px-3 py-1 rounded-full text-xs ${
                          order.status === 'pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : order.status === 'accepted'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-green-100 text-green-800'
                        }`}
                      >
                        {order.status}
                      </span>
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
