export default function CartView({ cart, total, onRemove }) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-inner mx-6 mb-8 w-[50%]">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Cart is empty</p>
      ) : (
        <>
          {cart.map((i) => (
            <div
              key={i._id}
              className="flex justify-between items-center border-b py-2"
            >
              <span className="font-medium">
                {i.name} × {i.qty}
              </span>
              <div className="flex items-center gap-3">
                <span className="text-gray-700">₹{i.price * i.qty}</span>
                <button
                  onClick={() => onRemove(i._id)}
                  className="text-red-500 hover:text-red-700 font-bold"
                >
                  ❌
                </button>
              </div>
            </div>
          ))}
          <div className="text-right mt-4">
            <h3 className="text-xl font-semibold">Total: ₹{total}</h3>
          </div>
        </>
      )}
    </div>
  );
}
