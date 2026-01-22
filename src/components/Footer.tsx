import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-foreground">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">Premium Harvest</h3>
            <p className="font-paragraph text-sm opacity-90 leading-relaxed">
              Parent company of Natures Choice, delivering premium wholesale products to the industry.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                Home
              </Link>
              <Link to="/shop" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                Shop
              </Link>
              <Link to="/contact" className="font-paragraph text-sm opacity-90 hover:opacity-100 transition-opacity">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact Information</h4>
            <div className="flex flex-col gap-3 font-paragraph text-sm opacity-90">
              <p>Email: premiumharvestbarhi@gmail.com</p>
              <p>Phone: +91 9810591016</p>
              <p>Address: 1ST, Office Premises No 1A, Shivji Market Co-op. Premises, Soc. Ltd., Plot No. 8 and 9 Sector 19 D, VASHI NAVI MUMBAI, Thane, Maharashtra, 400703</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="font-paragraph text-sm opacity-80">
            © {new Date().getFullYear()} Premium Harvest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
