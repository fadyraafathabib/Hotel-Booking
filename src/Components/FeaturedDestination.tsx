import { type JSX } from "react";
import { roomsDummyData } from "../assets/assets";
import Title from "./Title.tsx";
import { useNavigate } from "react-router-dom";
import HotelCard, { type Room } from "./HotelCard.tsx";

function FeaturedDestination(): JSX.Element {
  const navigate = useNavigate();

  const handleViewAll = (): void => {
    navigate("/rooms");
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20">
      <Title
        title={"Featured Destination"}
        subTitel={
          "Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences."
        }
      />
      <div className="flex flex-wrap items-center justify-center gap-6 mt-20">
        {roomsDummyData.slice(0, 4).map((room: Room, index: number) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>
      <button
        onClick={handleViewAll}
        className="my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer"
      >
        View All Hotels
      </button>
    </div>
  );
}

export default FeaturedDestination;