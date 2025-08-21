import { assets } from "../assets/assets";

const StarRating = ({ rating = 4 }) => {
  return (
    <div className="flex ">
      {Array(5)
        .fill("")
        .map((_, index) => (
          <img
            src={
              rating > index ? assets.starIconFilled : assets.starIconOutlined
            }
            alt=""
            className="w-4.5 h-4.5"
          />
        ))}
    </div>
  );
};

export default StarRating;
