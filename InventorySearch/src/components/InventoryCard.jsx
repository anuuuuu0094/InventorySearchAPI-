const InventoryCard = ({ item }) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
      
      <div className="flex justify-between items-start mb-3">
        <h2 className="font-semibold text-lg text-gray-800">
          {item.product_name}
        </h2>
        <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded">
          {item.category}
        </span>
      </div>
      <p className="text-xl font-bold text-green-600 mb-3">
        ₹{item.price}
      </p>
      <div className="border-t my-2"></div>
      <div className="text-sm text-gray-600 space-y-1">
        <p>
          <span className="font-medium text-gray-800">Supplier:</span>{" "}
          {item.supplier_name}
        </p>
        <p>
          <span className="font-medium text-gray-800">City:</span>{" "}
          {item.city}
        </p>
      </div>

    </div>
  );
};

export default InventoryCard;