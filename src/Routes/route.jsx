import { createBrowserRouter } from "react-router-dom";
import SelectionPage from "../Pages/SelectionPage";
import LoginPage from "../Pages/LoginPage";
import Error from "../Pages/Error";
import AlumniJobPost from "../Pages/AlumniJobPost ";
import ProfilePage from "../Pages/ProfilePage";
import AlumniFeed from "../Pages/AlumniFeed";
import StudentFeed from "../Pages/StudentFeed";
import TeacherFeed from "../Pages/TeacherFeed";
import AdminFeed from "../Pages/AdminFeed";
import AllStudentsPage from "../Pages/AllStudentsPage";

export const router = createBrowserRouter([
  { path: "/", element: <SelectionPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/home", element: <StudentFeed /> },
  { path: "/allstudent", element: <AllStudentsPage /> },
  { path: "/alumni", element: <AlumniFeed /> },
  { path: "/admin", element: <AdminFeed /> },
  { path: "/teacher", element: <TeacherFeed /> },
  { path: "/alumnijob", element: <AlumniJobPost /> },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
