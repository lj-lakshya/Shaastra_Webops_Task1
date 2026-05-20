type Props = {
  addToCart: (product: any) => void;
};

const products = [
  {
    id: 1,
    name: "Headphones",
    price: 1999,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2999,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
  },
  {
    id: 3,
    name: "Laptop",
    price: 59999,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
  }
];

export default function Sales({ addToCart }: Props) {

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold mb-8">
        Sales Page
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {products.map((product) => (

          <div
            key={product.id}
            className="bg-zinc-900 p-4 rounded-xl"
          >

            <img
              src={product.image}
              alt={product.name}
              className="h-52 w-full object-cover rounded-lg"
            />

            <h2 className="text-2xl mt-4">
              {product.name}
            </h2>

            <p className="text-emerald-400 mt-2">
              ₹{product.price}
            </p>

            <button
              onClick={() => addToCart(product)}
              className="mt-4 bg-emerald-500 px-4 py-2 rounded-lg hover:bg-emerald-600"
            >
              Add to Cart
            </button>

          </div>
        ))}

      </div>
    </div>
  );
}