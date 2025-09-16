"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

type FallbackImageProps = ImageProps & {
  fallbackSrc?: string;
};

export default function FallbackImage({
  src,
  alt,
  fallbackSrc = "/fallback.png", // <-- your placeholder image
  ...props
}: FallbackImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
}
