const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-5 backdrop-blur-md z-50">
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 rounded-full bg-customBlue animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-customBlue animate-bounce delay-150"></div>
        <div className="w-4 h-4 rounded-full bg-customBlue animate-bounce delay-300"></div>
      </div>
    </div>
  );
};

export default Loader;
