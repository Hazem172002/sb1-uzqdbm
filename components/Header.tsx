"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-background shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Verie
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="#about" className="text-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4 mt-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link href="#about" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link href="#contact" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;