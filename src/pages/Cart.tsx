type Props = {
  cart: any[];
  removeFromCart: (id: number) => void;
};

export default function Cart({
  cart,
  removeFromCart
}: Props) {

  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold mb-8">
        Cart Page
      </h1>

      {cart.length === 0 ? (

        <p className="text-zinc-400">
          Your cart is empty.
        </p>

      ) : (

        <>
          {cart.map((item) => (

            <div
              key={item.id}
              className="bg-zinc-900 p-4 rounded-xl mb-4"
            >

              <div className="flex items-center gap-4">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded-lg"
                />

                <div>

                  <h2 className="text-2xl">
                    {item.name}
                  </h2>

                  <p className="text-emerald-400">
                    ₹{item.price}
                  </p>

                  <p className="mt-1">
                    Quantity: {item.quantity}
                  </p>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-3 bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
                  >
                    Remove
                  </button>

                </div>
              </div>

            </div>

          ))}

          <h2 className="text-3xl font-bold mt-8">
            Total: ₹{totalPrice}
          </h2>
        </>
      )}

    </div>
  );
}