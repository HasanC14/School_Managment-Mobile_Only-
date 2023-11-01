import AlumniJobPostCard from "./AlumniJobPostCard";
import NavBar from "./Navbar";
import NotificationCard from "./NotificationCard";
import UpcomingEventCard from "./UpcomingEventCard";

const StudentFeed = () => {
  return (
    <div>
      <div className="bg-green-100 h-screen">
        <NavBar />
        <div className="p-4">
          <UpcomingEventCard />
          <NotificationCard />
          <AlumniJobPostCard />
        </div>
      </div>
    </div>
  );
};

export default StudentFeed;
