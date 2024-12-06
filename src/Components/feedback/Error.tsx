const Error = () => {
  return (
    <div className="flex items-center justify-center my-40 sm:my-20 bg-transparent">
      <div className="text-center bg-white  dark:bg-gray-300 shadow-lg p-8 rounded-lg border-t-4 border-customBlue">
        <h1 className="text-6xl font-bold text-customBlue mb-4">Error</h1>
        <p className="text-gray-600 text-lg mb-6">
          Estamos teniendo problemas para realizar tu peticion, intenta de nuevo
          mas tarde.
        </p>
      </div>
    </div>
  );
};

export default Error;
