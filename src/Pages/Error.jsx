import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="flex items-center h-full sm:p-16  dark:text-gray-800">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
          <span className="sr-only">Error</span>404
        </h2>
        <p className="text-2xl font-semibold md:text-3xl">
          Sorry, we couldnt find this page.
        </p>
        <p className="mt-4 mb-8 dark:text-gray-600">
          But dont worry, you can find plenty of other things on our homepage.
        </p>
        <Link
          to={"/"}
          className="btn px-8 py-3 font-semibold rounded  dark:text-gray-200"
        >
          Back to homepage
        </Link>
      </div>
    </section>
  );
};

export default Error;
