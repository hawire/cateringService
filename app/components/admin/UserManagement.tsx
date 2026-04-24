import { Link } from 'react-router';
import { ArrowLeft, Shield, User, Store } from 'lucide-react';

const mockUsers = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'customer', status: 'active' },
  {
    id: '2',
    name: 'Gourmet Delights',
    email: 'info@gourmetdelights.com',
    role: 'provider',
    status: 'active',
  },
  { id: '3', name: 'Sarah Smith', email: 'sarah@example.com', role: 'customer', status: 'active' },
  {
    id: '4',
    name: 'Spice Route',
    email: 'contact@spiceroute.com',
    role: 'provider',
    status: 'active',
  },
  {
    id: '5',
    name: 'Michael Johnson',
    email: 'michael@example.com',
    role: 'customer',
    status: 'active',
  },
  {
    id: '6',
    name: 'Fresh & Green',
    email: 'hello@freshgreen.com',
    role: 'provider',
    status: 'active',
  },
];

export default function UserManagement() {
  const customers = mockUsers.filter((u) => u.role === 'customer');
  const providers = mockUsers.filter((u) => u.role === 'provider');

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
        <h2 className="mb-8">User Management</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <User className="w-5 h-5 text-primary" />
              <h3>Customers ({customers.length})</h3>
            </div>
            <div className="space-y-3">
              {customers.map((user) => (
                <div key={user.id} className="bg-white rounded-xl p-4 border border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm">{user.name}</h4>
                        <p className="text-xs text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                      {user.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Store className="w-5 h-5 text-primary" />
              <h3>Providers ({providers.length})</h3>
            </div>
            <div className="space-y-3">
              {providers.map((user) => (
                <div key={user.id} className="bg-white rounded-xl p-4 border border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                        <Store className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm">{user.name}</h4>
                        <p className="text-xs text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                      {user.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-xl p-6 border border-border">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-primary" />
            <h3>User Statistics</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-accent rounded-lg">
              <p className="text-3xl mb-1">{mockUsers.length}</p>
              <p className="text-sm text-muted-foreground">Total Users</p>
            </div>
            <div className="text-center p-4 bg-accent rounded-lg">
              <p className="text-3xl mb-1">{customers.length}</p>
              <p className="text-sm text-muted-foreground">Customers</p>
            </div>
            <div className="text-center p-4 bg-accent rounded-lg">
              <p className="text-3xl mb-1">{providers.length}</p>
              <p className="text-sm text-muted-foreground">Providers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
