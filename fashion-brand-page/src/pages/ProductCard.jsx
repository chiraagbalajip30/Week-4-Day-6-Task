

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="h-64 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-gray-600">₹{product.price}</p>
        <button className="mt-3 w-full bg-black text-white py-2 rounded hover:bg-gray-800">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
