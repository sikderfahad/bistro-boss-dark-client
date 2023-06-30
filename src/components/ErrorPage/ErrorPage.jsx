const ErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
        <span
          role="img"
          aria-label="Animated crying emoji"
          className="text-7xl mb-4 animate-bounce"
        >
          😢
        </span>
        <h1 className="text-4xl font-bold text-white mb-4 animate-pulse">
          Oops!
        </h1>
        <h2 className="text-2xl text-white mb-4 animate-pulse">
          We couldn't find the page you're looking for.
        </h2>
        <p className="text-lg text-white mb-8 animate-pulse">
          It may have been moved, deleted, or never existed.
        </p>
        <a
          href="/"
          className="px-4 py-2 bg-white text-gray-800 rounded hover:bg-gray-200 transition-colors duration-300 ease-in-out animate-fade-in"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
