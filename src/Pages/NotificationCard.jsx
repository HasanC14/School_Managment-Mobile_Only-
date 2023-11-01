const NotificationCard = () => {
  return (
    <div className="p-4 rounded-md shadow-md mb-4 bg-teal-500 text-white">
      <h3 className="text-xl mb-2 font-semibold">Notification</h3>
      <div className="space-y-4 pl-2">
        <p className="underline text-lg text-gray-100">
          Exam canceled on 20.21.22
        </p>
        <p className="underline text-lg text-gray-100">
          Thesis Defense of Batch-201 will be held on 03.11.23
        </p>
      </div>
    </div>
  );
};

export default NotificationCard;
