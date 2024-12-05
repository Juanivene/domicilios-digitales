const Error = () => {
  return (
    <div className="flex items-center justify-center my-64 sm:my-40 bg-transparent">
      <div className="text-center bg-white shadow-lg p-8 rounded-lg border-t-4 border-customBlue">
        <h1 className="text-6xl font-bold text-customBlue mb-4">Error</h1>
        <p className="text-gray-600 text-lg mb-6">
          Estamos teniendo problemas para realizar tu peticion, intenta de nuevo
          mas tarde.
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-customBlue text-white font-semibold rounded-lg hover:bg-blue-900 transition"
        >
          Volver a intentar
        </a>
      </div>
    </div>
  );
};

export default Error;
