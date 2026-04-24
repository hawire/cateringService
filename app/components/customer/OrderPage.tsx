import { useLocation, useNavigate } from 'react-router';
import { ArrowLeft, CreditCard } from 'lucide-react';
import { SERVICE_FEE_PERCENTAGE } from '../../data/mockData';

export default function OrderPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, menuItems, provider } = location.state || {};

  if (!cart || !menuItems || !provider) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">No order data found</p>
          <button
            onClick={() => navigate('/customer')}
            className="px-4 py-2 bg-primary text-white rounded-lg"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  const orderItems = Object.entries(cart).map(([itemId, quantity]) => {
    const item = menuItems.find((i: any) => i.id === itemId);
    return { item, quantity };
  });

  const subtotal = orderItems.reduce(
    (sum, { item, quantity }) => sum + (item?.price || 0) * (quantity as number),
    0
  );
  const serviceFee = (subtotal * SERVICE_FEE_PERCENTAGE) / 100;
  const total = subtotal + serviceFee;

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-white border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="mb-8">Order Summary</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl p-6 border border-border">
              <h3 className="mb-4">Provider Details</h3>
              <div className="flex items-center gap-4">
                <img
                  src={provider.image}
                  alt={provider.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <h4>{provider.name}</h4>
                  <p className="text-sm text-muted-foreground">{provider.description}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-border">
              <h3 className="mb-4">Order Items</h3>
              <div className="space-y-4">
                {orderItems.map(({ item, quantity }) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between pb-4 border-b border-border last:border-0"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div>
                        <h4 className="text-sm">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">Qty: {quantity}</p>
                      </div>
                    </div>
                    <span className="text-primary">₹{item.price * (quantity as number)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 border border-border sticky top-8">
              <h3 className="mb-6">Payment Summary</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Service Fee ({SERVICE_FEE_PERCENTAGE}%)
                  </span>
                  <span>₹{serviceFee.toFixed(2)}</span>
                </div>
                <div className="pt-4 border-t border-border flex justify-between">
                  <span>Total Amount</span>
                  <span className="text-2xl text-primary">₹{total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={() =>
                  navigate('/customer/payment', {
                    state: { subtotal, serviceFee, total, orderItems, provider },
                  })
                }
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                <CreditCard className="w-5 h-5" />
                Proceed to Payment
              </button>

              <div className="mt-4 p-4 bg-accent rounded-lg">
                <p className="text-sm text-muted-foreground">
                  A {SERVICE_FEE_PERCENTAGE}% service fee is charged on all orders to maintain
                  platform quality and support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
