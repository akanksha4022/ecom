export default function ReceiptModal({ receipt, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 w-96 shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">🧾 Receipt</h2>

        {/*Customer details */}
        <div className="text-left mb-4">
          <p><strong>Name:</strong> {receipt.customer?.name}</p>
          <p><strong>Email:</strong> {receipt.customer?.email}</p>
        </div>

        <p className="text-lg mb-2 font-semibold">Total: ₹{receipt.total}</p>
        <p className="text-gray-600">{receipt.timestamp}</p>
        <p className="text-green-600 mt-2">{receipt.message}</p>

        <button
          onClick={onClose}
          className="mt-4 bg-[#750961] text-white px-6 py-2 rounded-md hover:bg-[#5a074d]"
        >
          Close
        </button>
      </div>
    </div>
  );
}
