import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Corporate Solutions', path: '/corporate-solutions' },
    { name: 'Personal Development', path: '/personal-development' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/60 backdrop-blur-md shadow-sm">
      <nav className="container-custom">
        {/* Desktop Layout (Grid ensures perfect centering) */}
        <div className="hidden lg:grid h-20 grid-cols-[1fr_auto_1fr] items-center gap-8">
          
          {/* Left: Logo */}
          <div className="flex items-center justify-self-start">
            <Link to="/" className="flex items-center space-x-2 group">
              <img 
                src="https://horizons-cdn.hostinger.com/722d85e9-751b-47c1-82ce-4531bf39f811/0a879486412cf29f2eec40c52a4594ae.png" 
                alt="AdaptivEdge Logo" 
                className="h-13 w-auto transition-opacity duration-200 group-hover:opacity-80"
              />
            </Link>
          </div>

          {/* Center: Navigation */}
          <div className="flex items-center justify-center space-x-8 bg-card/40 backdrop-blur-sm px-6 py-2.5 rounded-full border border-border/50 shadow-sm">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-secondary'
                    : 'text-foreground/80 hover:text-secondary hover:-translate-y-0.5'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right: CTA */}
          <div className="flex items-center justify-self-end">
            <Button 
              asChild 
              className="button-primary px-6 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex lg:hidden h-20 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <img 
                src="https://horizons-cdn.hostinger.com/722d85e9-751b-47c1-82ce-4531bf39f811/0a879486412cf29f2eec40c52a4594ae.png" 
                alt="AdaptivEdge Logo" 
                className="h-8 w-auto transition-opacity duration-200 group-hover:opacity-80"
              />
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground hover:text-secondary hover:bg-muted/50 rounded-lg">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur-xl border-l border-border overflow-y-auto">
                <div className="flex flex-col space-y-6 mt-12 pb-12">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 text-base font-medium transition-colors duration-200 rounded-lg ${
                        isActive(link.path)
                          ? 'text-secondary bg-secondary/10'
                          : 'text-foreground/80 hover:text-secondary hover:bg-muted/50'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="pt-6 px-4">
                    <Button 
                      asChild 
                      className="w-full button-primary rounded-full"
                    >
                      <Link to="/contact" onClick={() => setIsOpen(false)}>Get Started</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;