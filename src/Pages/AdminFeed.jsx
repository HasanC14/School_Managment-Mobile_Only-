import { Link } from "react-router-dom";
import NavBar from "./Navbar";

const AdminFeed = () => {
  return (
    <>
      <NavBar name={"Admin101"} />
      <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
        <div className="grid grid-cols-2 gap-4 p-4">
          <Link
            to={"/allstudent"}
            className="bg-green-500 p-6 rounded-lg text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Student</h3>
            <p>Manage students information</p>
          </Link>
          <div className="bg-green-500 p-6 rounded-lg text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Faculty</h3>
            <p>Manage faculty members</p>
          </div>
          <div className="bg-green-500 p-6 rounded-lg text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Alumni</h3>
            <p>Manage alumni information</p>
          </div>
          <div className="bg-green-500 p-6 rounded-lg text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Job Postings</h3>
            <p>Manage job postings for alumni</p>
          </div>
          <div className="bg-green-500 p-6 rounded-lg text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Event</h3>
            <p>Manage upcoming events</p>
          </div>
          <div className="bg-green-500 p-6 rounded-lg text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Notification</h3>
            <p>Send notifications to students and faculty</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminFeed;
