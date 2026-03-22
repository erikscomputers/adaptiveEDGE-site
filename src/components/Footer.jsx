import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-background/40 backdrop-blur-sm border-t border-border text-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img src="/logo.png" 
  alt="AdaptivEdge Logo"  className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[45ch]">
              Helping professionals adapt quickly, execute a plan, and lead with an edge in uncertain environments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Corporate Solutions', 'Personal Development', 'Shop', 'About', 'Contact'].map(item => <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-muted-foreground hover:text-secondary transition-colors duration-200">
                    {item}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-secondary" />
                <span>info@adaptivedge.com</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-secondary" />
                <span>+1 (706) 750-7385</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors duration-200" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors duration-200" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors duration-200" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} AdaptivEdge. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link 
  to="/privacy-policy" 
  className="text-sm text-muted-foreground hover:text-secondary transition-colors duration-200"
>
  Privacy Policy
</Link>
            <a href="#" className="text-sm text-muted-foreground hover:text-secondary transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;