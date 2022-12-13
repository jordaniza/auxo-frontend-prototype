import React from "react";

const ExternalUrl: React.FC<{ to: string; children: React.ReactNode }> = ({
  children,
  to,
}) => (
  <a href={to} target="_blank" rel="noreferrer noopener">
    {children}
  </a>
);

export default ExternalUrl;
