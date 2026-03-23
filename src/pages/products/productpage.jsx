import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';

// 👇 shared data
import { products } from '@/data/products';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="container-custom py-16 max-w-3xl mx-auto">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
          ← Back
        </Button>

        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

        <p className="text-muted-foreground mb-6">
          {product.description}
        </p>

        <div className="text-2xl font-bold mb-6">
          ${product.price.toFixed(2)}
        </div>

        <Button className="w-full">
          Purchase
        </Button>
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;