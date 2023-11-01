const AlumniJobPostCard = () => {
  const PostDetails = {
    name: "Prattay Dhar Logna",
    post: "Senior SQA Engineer needed for Bangla Puzzle Limited",
    batch: 191,
    date: "22.11.20",
    image: "/Assets/prattay.png",
  };
  return (
    <div className="bg-blue-500 p-4 rounded-md shadow-md mb-4 text-white">
      <div className="flex items-center mb-2">
        <img
          src={PostDetails.image}
          alt={PostDetails.name}
          className="w-10 h-10 rounded-full mr-2 border border-white"
        />

        <div className="flex flex-col">
          <div className="text-xl font-bold">{PostDetails.name}</div>
          <div className="text-xs">Batch-{PostDetails.batch}</div>
        </div>
      </div>
      <div className="">
        <p className="text-gray-200 mb-2">{PostDetails.post}</p>
        <p className="text-gray-300 text-xs text-end">{PostDetails.date}</p>
      </div>
    </div>
  );
};

export default AlumniJobPostCard;
