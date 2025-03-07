import { useEffect, useRef } from "react";

const Upcoming = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
        if (
          scrollRef.current.scrollLeft >=
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  const blogs = [
    "/blog1.png",
    "/blog2.png",
    "/blog3.png",
    "/blog4.png",
    "/blog5.png",
    "/blog6.png",
    "/blog7.png",
  ];

  return (
    <div className="relative max-w-lg mx-auto p-6 bg-gray-900 rounded-xl border border-blue-500 shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-xl font-bold">Up Coming Blogs</h2>
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        </div>
      </div>

      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-hidden whitespace-nowrap py-2"
      >
        {blogs.map((image, index) => (
          <div
            key={index}
            className="min-w-[120px] md:min-w-[160px] bg-gray-800 p-2 rounded-lg shadow-md"
          >
            <img
              src={image}
              alt="Blog"
              className="w-full h-auto rounded-md object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
