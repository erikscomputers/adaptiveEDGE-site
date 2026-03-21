
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServiceCard = ({ icon: Icon, title, description, variant = 'default' }) => {
  return (
    <div className="card-minimal p-8 h-full flex flex-col group">
      <div className="mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent">
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
      <p className="text-base leading-relaxed text-muted-foreground flex-1 mb-6">
        {description}
      </p>
      <div className="mt-auto">
        <Button variant="ghost" className="px-0 text-secondary hover:text-secondary/80 hover:bg-transparent group-hover:translate-x-1 transition-all duration-300">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
