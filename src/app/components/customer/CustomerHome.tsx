import { Link } from 'react-router';
import { Search, Star, MapPin, TrendingUp, ChefHat, LogOut } from 'lucide-react';
import { mockProviders } from '../../data/mockData';
import { useAuth } from '../../context/AuthContext';

export default function CustomerHome() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b border-border sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <ChefHat className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl text-primary">ElitePlates</h1>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/customer/orders"
              className="text-foreground hover:text-primary transition-colors"
            >
              My Orders
            </Link>
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
          <h2 className="text-4xl mb-2">Find the perfect catering</h2>
          <p className="text-muted-foreground">
            Discover amazing caterers for your next event
          </p>
        </div>

        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search caterers, cuisines, or dishes..."
            className="w-full pl-12 pr-4 py-4 bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring shadow-sm"
          />
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-primary" />
            <h3>Featured Caterers</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProviders.map((provider) => (
              <Link
                key={provider.id}
                to={`/customer/provider/${provider.id}`}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-border"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={provider.image}
                    alt={provider.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h4 className="mb-2">{provider.name}</h4>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {provider.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-[#FFA987] text-[#FFA987]" />
                      <span className="text-sm">
                        {provider.rating} ({provider.reviews})
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>Min ₹{provider.minOrder}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-3">
                    {provider.cuisine.map((c) => (
                      <span
                        key={c}
                        className="text-xs px-2 py-1 bg-accent text-foreground rounded-full"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
