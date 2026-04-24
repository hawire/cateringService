import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, Check, X, Clock } from 'lucide-react';
import { mockOrders as initialOrders } from '../../data/mockData';

export default function OrderManagement() {
  const [orders, setOrders] = useState(initialOrders.filter((o) => o.providerId === '1'));

  const handleAccept = (orderId: string) => {
    setOrders(orders.map((o) => (o.id === orderId ? { ...o, status: 'accepted' } : o)));
  };

  const handleReject = (orderId: string) => {
    if (confirm('Are you sure you want to reject this order?')) {
      setOrders(orders.filter((o) => o.id !== orderId));
    }
  };

  const handleComplete = (orderId: string) => {
    setOrders(orders.map((o) => (o.id === orderId ? { ...o, status: 'completed' } : o)));
  };

  const pendingOrders = orders.filter((o) => o.status === 'pending');
  const activeOrders = orders.filter((o) => o.status === 'accepted');
  const completedOrders = orders.filter((o) => o.status === 'completed');

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
        <h2 className="mb-8">Order Management</h2>

        {pendingOrders.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-yellow-600" />
              <h3>Pending Orders ({pendingOrders.length})</h3>
            </div>
            <div className="space-y-4">
              {pendingOrders.map((order) => (
                <div key={order.id} className="bg-white rounded-xl p-6 border border-border">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="mb-1">Order #{order.id}</h4>
                      <p className="text-sm text-muted-foreground">
                        Customer: {order.customerName}
                      </p>
                      <p className="text-sm text-muted-foreground">{order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground mb-1">Order Value</p>
                      <p className="text-2xl text-primary">₹{order.total}</p>
                      <p className="text-xs text-muted-foreground">
                        Commission: ₹{order.commission.toFixed(2)}
                      </p>
                      <p className="text-sm">
                        You earn: ₹{(order.total - order.commission).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm mb-2">Items:</p>
                    <ul className="space-y-1">
                      {order.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-muted-foreground flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => handleAccept(order.id)}
                      className="flex-1 bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                    >
                      <Check className="w-4 h-4" />
                      Accept Order
                    </button>
                    <button
                      onClick={() => handleReject(order.id)}
                      className="flex-1 bg-destructive text-white py-2 rounded-lg hover:bg-destructive/90 transition-colors flex items-center justify-center gap-2"
                    >
                      <X className="w-4 h-4" />
                      Reject Order
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeOrders.length > 0 && (
          <div className="mb-8">
            <h3 className="mb-4">Active Orders ({activeOrders.length})</h3>
            <div className="space-y-4">
              {activeOrders.map((order) => (
                <div key={order.id} className="bg-white rounded-xl p-6 border border-border">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="mb-1">Order #{order.id}</h4>
                      <p className="text-sm text-muted-foreground">
                        Customer: {order.customerName}
                      </p>
                      <p className="text-sm text-muted-foreground">{order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl text-primary">₹{order.total}</p>
                      <p className="text-sm">
                        You earn: ₹{(order.total - order.commission).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <ul className="space-y-1">
                      {order.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-muted-foreground flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleComplete(order.id)}
                    className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    Mark as Completed
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {completedOrders.length > 0 && (
          <div>
            <h3 className="mb-4">Completed Orders ({completedOrders.length})</h3>
            <div className="space-y-4">
              {completedOrders.map((order) => (
                <div
                  key={order.id}
                  className="bg-white rounded-xl p-6 border border-border opacity-75"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="mb-1">Order #{order.id}</h4>
                      <p className="text-sm text-muted-foreground">
                        Customer: {order.customerName}
                      </p>
                      <p className="text-sm text-muted-foreground">{order.date}</p>
                      <ul className="mt-2 space-y-1">
                        {order.items.map((item, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-right">
                      <p className="text-xl text-primary">₹{order.total}</p>
                      <p className="text-sm text-green-600">
                        Earned: ₹{(order.total - order.commission).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
