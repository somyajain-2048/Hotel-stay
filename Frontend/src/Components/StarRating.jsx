import { assets } from "../assets/assets";

const StarRating = ({ rating = 4 }) => {
  return (
    <div className="flex ">
      {Array(5)
        .fill("")
        .map((_, index) => (
          <img
            key={index}
            src={
              rating > index ? assets.starIconFilled : assets.starIconOutlined
            }
            alt="star-1 "
            className="w-4.5 h-4.5"
          />
        ))}
    </div>
  );
};

export default StarRating;
