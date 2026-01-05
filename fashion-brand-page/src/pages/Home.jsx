import menImg from "../assets/menImg.jpg";
import womenImg from "../assets/womenImg.avif";
import accessoriesImg from "../assets/accessoriesImg.avif";

const Home = () => {
  const categories = [
    { id: 1, title: "Men", img: menImg },
    { id: 2, title: "Women", img: womenImg },
    { id: 3, title: "Accessories", img: accessoriesImg },
  ];

  return (
    <div className="bg-gray-100">
      {/* Hero */}
      <section className="h-[70vh] flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold tracking-widest mb-4">
          AURA
        </h1>
        <p className="text-gray-600 max-w-xl mb-6">
          Premium fashion crafted for modern lifestyle
        </p>
        <button className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition">
          Shop Now
        </button>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        {categories.map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-lg shadow bg-white"
          >
            <div className="relative w-full h-110 min-h-64 md:min-h-80 flex items-center justify-center p-4">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-contain group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-white text-2xl font-semibold">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
