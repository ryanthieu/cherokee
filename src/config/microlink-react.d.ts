declare module '@microlink/react' {
    import React from 'react';
  
    interface MicrolinkProps {
      url: string;
      size?: 'large' | 'small';
      contrast?: boolean;
      style?: React.CSSProperties;
      className?: string;
      media?: string[];
      children?: React.ReactNode;
      [key: string]: any;  
    }
  
    const Microlink: (props: MicrolinkProps) => JSX.Element;
  
    export default Microlink;
  }