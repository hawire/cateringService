import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router';
import { Star, MapPin, ArrowLeft, Plus, Minus, ShoppingCart } from 'lucide-react';
import { mockProviders, mockMenuItems } from '../../data/mockData';

export default function ProviderDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const provider = mockProviders.find((p) => p.id === id);
  const menuItems = mockMenuItems.filter((item) => item.providerId === id);
  const [cart, setCart] = useState<Record<string, number>>({});

  if (!provider) {
    return <div>Provider not found</div>;
  }

  const addToCart = (itemId: string) => {
    setCart((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId]--;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const cartTotal = Object.entries(cart).reduce((total, [itemId, quantity]) => {
    const item = menuItems.find((i) => i.id === itemId);
    return total + (item?.price || 0) * quantity;
  }, 0);

  const cartItemsCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={() => navigate('/customer')}
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-border mb-8">
          <div className="aspect-[21/9] overflow-hidden">
            <img
              src={provider.image}
              alt={provider.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="mb-2">{provider.name}</h2>
            <p className="text-muted-foreground mb-4">{provider.description}</p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-[#FFA987] text-[#FFA987]" />
                <span>
                  {provider.rating} ({provider.reviews} reviews)
                </span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>Min Order: ₹{provider.minOrder}</span>
              </div>
            </div>
          </div>
        </div>

        <h3 className="mb-6">Menu</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-border"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="flex-1">{item.name}</h4>
                  <span className="bg-accent px-2 py-1 rounded-lg text-sm">
                    {item.category}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary">₹{item.price}</span>
                  {cart[item.id] ? (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="w-8 h-8 bg-accent rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span>{cart[item.id]}</span>
                      <button
                        onClick={() => addToCart(item.id)}
                        className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => addToCart(item.id)}
                      className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Add
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {cartItemsCount > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border p-4 shadow-lg">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-primary" />
                <span>
                  {cartItemsCount} item{cartItemsCount > 1 ? 's' : ''}
                </span>
              </div>
              <span className="text-xl text-primary">₹{cartTotal}</span>
            </div>
            <Link
              to={`/customer/order/${id}`}
              state={{ cart, menuItems, provider }}
              className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
