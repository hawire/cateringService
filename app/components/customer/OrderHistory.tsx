import { Link } from 'react-router';
import { ArrowLeft, Package, Clock, CheckCircle } from 'lucide-react';
import { mockOrders } from '../../data/mockData';

export default function OrderHistory() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link
            to="/customer"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="mb-8">Order History</h2>

        <div className="space-y-4">
          {mockOrders.map((order) => (
            <div key={order.id} className="bg-white rounded-xl p-6 border border-border">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h4>{order.providerName}</h4>
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        order.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : order.status === 'accepted'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {order.status === 'pending' && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          Pending
                        </div>
                      )}
                      {order.status === 'accepted' && (
                        <div className="flex items-center gap-1">
                          <Package className="w-3 h-3" />
                          Accepted
                        </div>
                      )}
                      {order.status === 'completed' && (
                        <div className="flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          Completed
                        </div>
                      )}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">Order #{order.id}</p>
                  <p className="text-sm text-muted-foreground">{order.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground mb-1">Total Amount</p>
                  <p className="text-2xl text-primary">₹{order.total}</p>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <p className="text-sm mb-2">Items:</p>
                <ul className="space-y-1">
                  {order.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border pt-4 mt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Service Fee (10%)</span>
                  <span>₹{order.commission.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
