import { Link, useLocation } from 'react-router-dom';
import { Image } from '@/components/ui/image';

export default function Header() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="w-full bg-background border-b border-primary/10">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <Image
              src="https://static.wixstatic.com/media/e51c33_53857f33ae0549e98a212f15977e7369~mv2.png"
              alt="Premium Harvest Logo"
              width={48}
              height={48}
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`font-paragraph text-base transition-colors ${
                isActive('/') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'
              }`}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className={`font-paragraph text-base transition-colors ${
                isActive('/shop') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'
              }`}
            >
              Our Range
            </Link>
            <Link
              to="/contact"
              className={`font-paragraph text-base transition-colors ${
                isActive('/contact') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'
              }`}
            >
              Contact
            </Link>
          </nav>

          <Link
            to="/contact"
            className="hidden md:block px-6 py-2.5 border-2 border-secondary text-secondary font-paragraph text-base rounded-full hover:bg-secondary hover:text-secondary-foreground transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}
