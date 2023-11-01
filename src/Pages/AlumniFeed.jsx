import AlumniJobPostCard from "./AlumniJobPostCard";
import NavBar from "./Navbar";
import UpcomingEventCard from "./UpcomingEventCard";

const AlumniFeed = () => {
  return (
    <div>
      <div className="bg-green-100 h-screen">
        <NavBar name={"Mehedi Hasan"} batch={191} />
        <div className="p-4">
          <UpcomingEventCard />
          <AlumniJobPostCard />
        </div>
      </div>
    </div>
  );
};

export default AlumniFeed;
