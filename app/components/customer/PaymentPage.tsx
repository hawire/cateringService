import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { ArrowLeft, CreditCard, Check } from 'lucide-react';
import { SERVICE_FEE_PERCENTAGE } from '../../data/mockData';

export default function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { subtotal, serviceFee, total } = location.state || {};
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const handlePayment = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
      setTimeout(() => {
        navigate('/customer/orders');
      }, 2000);
    }, 2000);
  };

  if (!subtotal) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">No payment data found</p>
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

      <div className="max-w-2xl mx-auto px-4 py-8">
        {success ? (
          <div className="bg-white rounded-xl p-8 border border-border text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="mb-2">Payment Successful!</h2>
            <p className="text-muted-foreground mb-4">
              Your order has been placed successfully
            </p>
            <p className="text-sm text-muted-foreground">Redirecting to orders...</p>
          </div>
        ) : (
          <>
            <h2 className="mb-8">Payment Details</h2>

            <div className="bg-white rounded-xl p-6 border border-border mb-6">
              <h3 className="mb-4">Payment Breakdown</h3>
              <div className="space-y-3">
                <div className="flex justify-between pb-3 border-b border-border">
                  <span className="text-muted-foreground">Order Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between pb-3 border-b border-border">
                  <div>
                    <span className="text-muted-foreground">Platform Service Fee</span>
                    <p className="text-xs text-muted-foreground">
                      {SERVICE_FEE_PERCENTAGE}% of order value
                    </p>
                  </div>
                  <span>₹{serviceFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span className="text-xl">Total Payment</span>
                  <span className="text-2xl text-primary">₹{total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-border mb-6">
              <h3 className="mb-4">Card Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-foreground mb-2 block">Card Number</label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-foreground mb-2 block">Expiry Date</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-foreground mb-2 block">CVV</label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-foreground mb-2 block">Cardholder Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={handlePayment}
              disabled={processing}
              className="w-full bg-primary text-white py-4 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <CreditCard className="w-5 h-5" />
              {processing ? 'Processing Payment...' : `Pay ₹${total.toFixed(2)}`}
            </button>

            <div className="mt-6 p-4 bg-accent rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                Your payment is secure and encrypted. The {SERVICE_FEE_PERCENTAGE}% service fee
                supports platform maintenance and customer support.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
