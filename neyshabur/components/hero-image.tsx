import Image from 'next/image';

export function HeroImage({
  src,
  alt,
  width = 1200,
  height = 600,
  className = '',
  priority = false,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="h-full w-full object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
      />
    </div>
  );
}
