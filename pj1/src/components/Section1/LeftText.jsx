const LeftText = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="space-y-2">
        <h1 className="text-4xl xl:text-6xl font-extrabold text-blue-600 tracking-tight leading-tight">
          Perspective
        </h1>

        <h1 className="text-4xl xl:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Customer
        </h1>

        <h1 className="text-4xl xl:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Segmentation
        </h1>
      </div>

      <p className="mt-8 text-lg md:text-xl text-gray-500 leading-relaxed max-w-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Explicabo deleniti consequuntur sequi culpa porro quia deserunt
        soluta et, quibusdam quod itaque maxime.
      </p>

      <div className="mt-10">
        <button className="rounded-full bg-blue-600 px-8 py-4 font-bold text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300 transform hover:-translate-y-1 text-lg">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LeftText;