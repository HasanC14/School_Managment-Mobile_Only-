import Header from "./Header";

const AlumniJobPost = () => {
  return (
    <div className="bg-green-500 w-full ">
      {/* Header */}
      <Header title={"Job Post"}></Header>
      {/* Main */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
        <div className="max-w-2xl mx-auto p-6  rounded-md mt-8 w-full">
          <form>
            <div className="mb-4">
              <label
                htmlFor="jobTitle"
                className="block text-gray-700 text-xl font-semibold"
              >
                Post Heading:
              </label>
              <input
                type="text"
                id="jobTitle"
                className="w-full border-b border-gray-300 p-2 bg-transparent outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="jobTitle"
                className="block text-gray-700 text-xl font-semibold"
              >
                Job Title:
              </label>
              <input
                type="text"
                id="jobTitle"
                className="w-full border-b border-gray-300 p-2 bg-transparent outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="companyName"
                className="block text-gray-700 text-xl font-semibold"
              >
                Company Name:
              </label>
              <input
                type="text"
                id="companyName"
                className="w-full border-b border-gray-300 p-2 bg-transparent outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="jobDescription"
                className="block text-gray-700 text-xl font-semibold"
              >
                Job Description:
              </label>
              <textarea
                id="jobDescription"
                className="w-full border-b border-gray-300 p-2 bg-transparent outline-none"
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="guidelines"
                className="block text-gray-700 text-xl font-semibold"
              >
                Guidelines:
              </label>
              <textarea
                id="guidelines"
                className="w-full border-b border-gray-300 p-2 bg-transparent outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 w-full text-xl font-semibold"
            >
              Publish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AlumniJobPost;
