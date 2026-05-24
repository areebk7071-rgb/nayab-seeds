import { useState } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

export default function LazyImage({ src, alt, className = '', loading = 'lazy' }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-sage-100 dark:bg-charcoal-700 ${className}`}>
      {!loaded && <div className="absolute inset-0 animate-pulse bg-sage-200/60 dark:bg-charcoal-600/60" />}
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}
