import type { JSX } from "react";
import { assets } from "../assets/assets";

interface StarRatingProps {
  rating?: number;
}

function StarRating({ rating = 4 }: StarRatingProps): JSX.Element {
  return (
    <>
      {Array(5)
        .fill("")
        .map((_, index) => (
          <img
            key={index}
            src={
              rating > index ? assets.starIconFilled : assets.starIconOutlined
            }
            alt="star"
            className="w-4.5 h-4.5"
          />
        ))}
    </>
  );
}

export default StarRating;