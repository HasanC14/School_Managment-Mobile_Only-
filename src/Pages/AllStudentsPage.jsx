import { useState } from "react";
import Header from "./Header";

const AllStudentsPage = () => {
  const dummyData = [
    { name: "Md. Hasan Chowdhury", blocked: false },
    { name: "Prattay Dhar Logna", blocked: true },
    { name: "Shithi Rani Saha", blocked: false },
    // Add more dummy data as needed
  ];

  const [students, setStudents] = useState(dummyData);
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    const filteredStudents = dummyData.filter((student) =>
      student.name.toLowerCase().includes(query.toLowerCase())
    );
    setStudents(filteredStudents);
  };

  const handleDelete = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  };

  const handleBlock = (id) => {
    const updatedStudents = students.map((student) =>
      student.id === id ? { ...student, blocked: true } : student
    );
    setStudents(updatedStudents);
  };

  return (
    <div className="bg-green-100  h-screen">
      <Header title={"All Student Information"} />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4"></h1>
        <div className="mb-4 flex items-center">
          <input
            type="text"
            placeholder="Search by Name or Id"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full border-b border-gray-300 p-2 bg-transparent outline-none"
          />
          <button
            onClick={handleSearch}
            className="bg-gray-400 text-white py-2 px-4 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path
                fill="#fff"
                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
              />
            </svg>
          </button>
        </div>
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-200 ">
            <tr>
              <th className="p-2 text-start">Name</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b text-start">
                <td className="p-2 w-4/5">
                  <div className="flex space-x-1">
                    <img
                      src="/Assets/profile.png"
                      alt=""
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-bold">{student.name}</p>
                      <p className="text-xs">201002134</p>
                    </div>
                  </div>
                </td>
                <td className="p-2 w-1/5 flex">
                  <button
                    onClick={() => handleDelete(student.id)}
                    className="bg-red-500 text-white py-1 px-2 rounded mr-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="#fff"
                        d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                      />
                    </svg>
                  </button>
                  {!student.blocked && (
                    <button
                      onClick={() => handleBlock(student.id)}
                      className="bg-yellow-500 text-white py-1 px-2 rounded"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="#fff"
                          d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
                        />
                      </svg>
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllStudentsPage;
