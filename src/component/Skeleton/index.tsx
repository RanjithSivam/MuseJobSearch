const Skeleton = () => {
  return (
    <div className="w-full h-24 border rounded border-light-grey p-2">
      <div className="flex animate-pulse flex-row items-center h-full justify-start space-x-5">
        <div className="w-12 bg-light-grey h-12 rounded-full "></div>
        <div className="flex flex-col space-y-3">
          <div className="w-36 bg-light-grey h-6 rounded "></div>
          <div className="w-24 bg-light-grey h-6 rounded "></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
