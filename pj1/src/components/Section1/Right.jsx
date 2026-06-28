const Right = () => {
  const arr = [{
    "id": 1,
    "img": "https://images.pexels.com/photos/8683531/pexels-photo-8683531.jpeg?auto=compress&cs=tinysrgb&w=800",
    "desc": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae architecto temporibus esse quasi nam? Sit corporis soluta laboriosam excepturi rerum',
    "btn": "staisfied"
  },
  {


    "id": 2,
    "img": "https://images.pexels.com/photos/24260482/pexels-photo-24260482.jpeg?auto=compress&cs=tinysrgb&w=800",
    "desc": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae architecto temporibus esse quasi nam? Sit corporis soluta laboriosam excepturi rerum',
    "btn": "underserved"
  },
  {


    "id": 3,
    "img": "https://images.pexels.com/photos/32721696/pexels-photo-32721696.jpeg?auto=compress&cs=tinysrgb&w=800",
    "desc": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae architecto temporibus esse quasi nam? Sit corporis soluta laboriosam excepturi rerum',
    "btn": "underbanked"
  }
  ]
  return (
    <div className="bg-amber-400 flex gap-4 w-full h-full items-center justify-center px-4 py-5 rounded-2xl">
      {arr.map(function (props) {
        return (
          <div
            key={props.id}
            className=" flex-1 min-w-0 h-[400px] overflow-hidden relative rounded-2xl shadow-xl transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
          >
            {/* Background Image */}
            <img
              src={props.img}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              alt=""
            />

            {/* Dark Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

            {/* Content Container */}
            <div className="relative h-full p-6 flex flex-col justify-between z-10">
              {/* ID Badge */}
              <h3 className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xl font-bold rounded-full h-12 w-12 flex justify-center items-center shadow-lg">
                {props.id}
              </h3>

              {/* Bottom Text & Button */}
              <div className="mt-auto flex flex-col gap-3">
                <p className="text-gray-200 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {props.desc}
                </p>
                <button className="bg-blue-500 text-black px-4 py-2 text-sm rounded-full font-semibold items-center tracking-wide hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md self-start w-35 text-left">
                  {props.btn}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Right