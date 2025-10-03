"use client";
import Image from "next/image";
import { ComponentProps, useState } from "react";

interface OptimizedImageProps extends ComponentProps<typeof Image> {
  priority?: boolean;
  isLCP?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  priority = false,
  isLCP = false,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Image
      {...props}
      priority={priority || isLCP}
      quality={isLCP ? 85 : 75}
      onLoad={() => setIsLoading(false)}
      style={{
        ...props.style,
        transition: isLoading ? 'none' : 'opacity 0.3s',
      }}
      placeholder="empty"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
    />
  );
}; 