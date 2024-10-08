// src/app/components/PortableTextRenderer.js
import React from 'react';
import { PortableText } from '@portabletext/react';

// Define the components for custom rendering if needed
const components = {
  types: {
    // Define custom rendering for block types, e.g., images
    image: ({ value }) => {
      return (
        <img
          src={value.asset.url}
          alt={value.alt || 'Image'}
          style={{ width: '100%', height: 'auto' }}
        />
      );
    },
  },
  block: {
    h1: ({ children }) => <h1 className="text-3xl font-bold">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-bold">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-bold">{children}</h3>,
    normal: ({ children }) => <p className="my-4">{children}</p>,
  },
};

const PortableTextRenderer = ({ content }) => {
  return <PortableText value={content} components={components} />;
};

export default PortableTextRenderer;
