import Image from "next/image";
import React from "react";

function LoginAnimation({ animationIndex }: { animationIndex: number }) {
  return (
    <div className="image-container">
      <Image
        src={`/animation-${animationIndex}.gif`}
        alt={`Animated GIF animation-${animationIndex}`}
        width={900}
        height={600}
        layout="responsive"
      />
    </div>
  );
}

export default LoginAnimation;
