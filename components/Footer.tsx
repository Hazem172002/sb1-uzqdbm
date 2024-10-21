import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">About Verie</h3>
            <p className="text-foreground">
              Verie is a luxury perfume brand that combines artistry and science to create unforgettable fragrances.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Contact Us</h3>
            <p className="text-foreground">Email: info@verie.com</p>
            <p className="text-foreground">Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-foreground">
          <p>&copy; 2023 Verie Luxury Perfume. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;