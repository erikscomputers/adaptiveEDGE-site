
import React from 'react';

const ValuePropositionCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="card-minimal p-8 h-full flex flex-col">
      <div className="mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/10 text-secondary">
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
      <p className="text-base leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
};

export default ValuePropositionCard;
