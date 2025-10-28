const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-8 min-h-full">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 border border-white/20 shadow-lg ${
                i % 2 === 0 ? "animate-pulse" : ""
              }`}
            />
          ))}
        </div>
        <h1 className="text-2xl font-bold mb-4 animate-bounce bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          ChatFlow @ibrahimaliyevv2
        </h1>
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
