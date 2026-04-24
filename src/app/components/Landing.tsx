import { Link } from 'react-router';
import { ChefHat, Users, Store, Shield, Star, TrendingUp } from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFBF5] via-[#FFE5D9] to-[#FFA987]">
      <header className="border-b border-white/20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <ChefHat className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl text-primary">ElitePlates</h1>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="px-4 py-2 text-foreground hover:text-primary transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
          <ChefHat className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-6xl mb-6 text-foreground">
          ElitePlates
        </h1>
        <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
          The premier marketplace connecting exceptional catering services with customers seeking
          the perfect dining experience for their events
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/signup"
            className="px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors shadow-lg"
          >
            Start Ordering
          </Link>
          <Link
            to="/signup"
            className="px-8 py-4 bg-white text-primary rounded-xl hover:shadow-lg transition-shadow border border-primary"
          >
            Become a Provider
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="mb-3">For Customers</h3>
            <p className="text-muted-foreground mb-4">
              Browse hundreds of caterers, compare menus, read reviews, and book the perfect
              catering service for your event
            </p>
            <ul className="space-y-2 text-sm text-left">
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-primary" />
                Verified caterers with ratings
              </li>
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-primary" />
                Secure payment processing
              </li>
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-primary" />
                Order tracking & history
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Store className="w-8 h-8 text-primary" />
            </div>
            <h3 className="mb-3">For Providers</h3>
            <p className="text-muted-foreground mb-4">
              Grow your catering business, manage orders efficiently, and reach customers actively
              looking for your services
            </p>
            <ul className="space-y-2 text-sm text-left">
              <li className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                Easy menu management
              </li>
              <li className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                Real-time order notifications
              </li>
              <li className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                Earnings analytics
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="mb-3">Secure & Reliable</h3>
            <p className="text-muted-foreground mb-4">
              Built with security and reliability in mind, ensuring smooth transactions and
              protected data for all users
            </p>
            <ul className="space-y-2 text-sm text-left">
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                Encrypted payments
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                Transparent pricing
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                24/7 customer support
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="mb-4">Ready to get started?</h2>
        <p className="text-muted-foreground mb-8">
          Join thousands of customers and providers on ElitePlates
        </p>
        <Link
          to="/signup"
          className="inline-block px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors shadow-lg"
        >
          Create Your Account
        </Link>
      </section>

      <footer className="border-t border-white/20 bg-white/80 backdrop-blur-sm mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>© 2026 ElitePlates. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
