'use client'
import React from 'react';

// Assuming customSerializer is already defined as in your previous code
const customSerializer = {
  types: {
    block: ({ value }) => {
      const { style = "normal", children = [] } = value;

      if (!children || !children.length) {
        return null;
      }

      switch (style) {
        case "blockquote":
          return (
            <blockquote className="border-l-4 border-gray-300 pl-4">
              {children.map((child, index) => (
                <span key={index}>{child.text || ""}</span>
              ))}
            </blockquote>
          );
        case "h1":
          return (
            <h1 className="text-4xl font-bold">
              {children.map((child, index) => (
                <span key={index}>{child.text || ""}</span>
              ))}
            </h1>
          );
        case "h2":
          return (
            <h2 className="text-3xl font-semibold">
              {children.map((child, index) => (
                <span key={index}>{child.text || ""}</span>
              ))}
            </h2>
          );
        case "h3":
          return (
            <h3 className="text-2xl font-medium">
              {children.map((child, index) => (
                <span key={index}>{child.text || ""}</span>
              ))}
            </h3>
          );
        default:
          return (
            <p>
              {children.map((child, index) => (
                <span key={index}>{child.text || ""}</span>
              ))}
            </p>
          );
      }
    },
  },
  marks: {
    big: ({ children }) => (
      <span style={{ fontSize: "1.5em" }}>{children}</span>
    ),
    small: ({ children }) => (
      <span style={{ fontSize: "0.75em" }}>{children}</span>
    ),
    color: ({ children, mark }) => (
      <span style={{ color: mark.color }}>{children}</span>
    ),
  },
};
const PortableTextRenderer = ({ blocks }) => {
  if (!blocks || !blocks.length) {
    return null;
  }

  return (
    <div>
      {blocks.map((block, index) => {
        const { _type, style = 'normal', children = [] } = block;

        if (_type === 'block') {
          const BlockComponent = customSerializer.types.block;
          return <BlockComponent key={index} value={block} />;
        }

        // Handle other block types if necessary
        return null;
      })}
    </div>
  );
};

export default PortableTextRenderer;
