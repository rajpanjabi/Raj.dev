'use client';

export default function TravelPage() {
  const photos = [
    "/travel/1.jpg",
    "/travel/2.jpg",
    "/travel/3.jpg",
    "/travel/4.jpg",
    "/travel/5.JPG",   
    "/travel/6.jpg",
    "/travel/7.jpg",
    "/travel/8.jpg",
    "/travel/9.jpg",
    "/travel/10.jpg",
    "/travel/11.jpg",
    "/travel/12.jpg",
    "/travel/13.jpg",
    "/travel/14.JPG",
    "/travel/15.jpg",
    "/travel/16.JPG",
    "/travel/17.JPG",
    "/travel/18.JPG",
    "/travel/20.JPG",
    "/travel/22.JPG",

   


  ];

  return (
   <div className="min-h-screen bg-gray-50 dark:bg-[#0a0f24] text-gray-900 dark:text-gray-100 p-8 transition-colors duration-300">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2 text-[#7dd3fc]">✈️ Places I&apos;ve Explored</h1>
        <p className="text-gray-400">Wander often, wonder always.</p>
      </div>

      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {photos.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Travel photo ${index + 1}`}
            className="w-full rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
}