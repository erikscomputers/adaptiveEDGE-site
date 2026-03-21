
import React from 'react';

const MethodStepCard = ({ stepNumber, title, description, icon: Icon }) => {
  return (
    <div className="card-minimal p-8 relative overflow-hidden group">
      <div className="absolute top-0 right-0 -mt-4 -mr-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
        <span className="text-9xl font-bold text-foreground" style={{fontVariantNumeric: 'tabular-nums'}}>
          {stepNumber}
        </span>
      </div>
      <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6">
        <div className="flex-shrink-0">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent">
            <Icon className="h-6 w-6" />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-3">
            <span className="text-sm font-semibold text-accent tracking-wider">STEP {stepNumber}</span>
            <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground max-w-prose">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MethodStepCard;
