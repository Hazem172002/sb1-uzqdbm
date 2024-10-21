"use client"

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ProductSection = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[500px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1615526675159-e248c3021d3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Verie Perfume"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4 text-primary">Verie Luxury Perfume</h1>
            <p className="text-lg mb-6 text-foreground">
              Experience the essence of luxury with Verie, our signature fragrance that embodies elegance and sophistication.
            </p>
            <Card className="mb-6">
              <CardContent className="p-4">
                <h2 className="text-2xl font-semibold mb-2 text-primary">$199.99</h2>
                <div className="flex items-center mb-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <span className="mx-4 text-lg font-semibold">{quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
                <Button className="w-full">Add to Cart</Button>
              </CardContent>
            </Card>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Product Details</h3>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Top notes: Bergamot, Lemon, Lavender</li>
                <li>Heart notes: Rose, Jasmine, Ylang-ylang</li>
                <li>Base notes: Sandalwood, Vanilla, Musk</li>
                <li>50ml bottle</li>
                <li>Made in France</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;