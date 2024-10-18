export default function invalid() {
    return (
        <div className="bg-gray-900 min-h-screen font-sans text-gray-300">
          <div className="absolute inset-0">
            <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" preserveAspectRatio="none">
              <g fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M0 0H800V600H0z"/>
                <path d="M0 0C111 148 222 296 333 444S444 592 555 740c111 148 222 296 333 444V0H0z" />
              </g>
            </svg>
          </div>
           {/* Main Section */}
      <div className="relative flex items-center justify-center h-screen bg-gradient-to-b from-pink-300 to-pink-600">
        <div className="flex items-center justify-between max-w-6xl mx-8 space-x-8">
          <div className="text-left">
            <h1 className="text-5xl font-extrabold text-white transition-transform duration-500 transform hover:scale-110 animate-pulse">
              not existing!
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              sorry, this site doesn't exist yet!
            </p>
            <div className="mt-8 flex space-x-6">
              <a
                className="bg-gradient-to-r from-pink-500 font-inter font-bold to-pink-600 text-white py-3 px-8 rounded-2xl shadow-lg hover:shadow-xl transform transition-transform duration-500 hover:scale-105"
                href="/"
              >
                back
              </a>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};