import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, Save } from 'lucide-react';
import { SERVICE_FEE_PERCENTAGE } from '../../data/mockData';

export default function Settings() {
  const [serviceFee, setServiceFee] = useState(SERVICE_FEE_PERCENTAGE);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

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

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="mb-8">Platform Settings</h2>

        <div className="bg-white rounded-xl p-6 border border-border mb-6">
          <h3 className="mb-6">Service Fee Configuration</h3>

          <div className="space-y-6">
            <div>
              <label className="text-sm text-foreground mb-2 block">
                Platform Service Fee Percentage
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  value={serviceFee}
                  onChange={(e) => setServiceFee(parseFloat(e.target.value))}
                  min="0"
                  max="100"
                  step="0.1"
                  className="flex-1 px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <span className="text-2xl">%</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                This percentage will be charged on all orders as platform commission
              </p>
            </div>

            <div className="bg-accent rounded-lg p-4">
              <h4 className="text-sm mb-2">Impact Preview</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Order Value: ₹1000</span>
                  <span>Commission: ₹{(1000 * serviceFee) / 100}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Order Value: ₹5000</span>
                  <span>Commission: ₹{(5000 * serviceFee) / 100}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Order Value: ₹10000</span>
                  <span>Commission: ₹{(10000 * serviceFee) / 100}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleSave}
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              <Save className="w-5 h-5" />
              {saved ? 'Settings Saved!' : 'Save Settings'}
            </button>

            {saved && (
              <div className="bg-green-100 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-center">
                Settings updated successfully!
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-border">
          <h3 className="mb-4">Important Information</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
              <p className="text-sm text-muted-foreground">
                Changing the service fee will only affect new orders
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
              <p className="text-sm text-muted-foreground">
                Existing orders will maintain their original commission rate
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
              <p className="text-sm text-muted-foreground">
                Service fee changes are logged for audit purposes
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
