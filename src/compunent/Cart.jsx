import React from "react";

const Cart = ({ carts, setCarts ,setActiveTab}) => {
  const total = carts.reduce((sum, tool) => sum + tool.price, 0);
const handleCheckOut=()=>{
  setCarts([])
}

  const handleRemove = (index) => {
    setCarts(carts.filter((_, i) => i !== index));
  };

  return (
    <div className="py-20 px-10 bg-white min-h-screen">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-black text-gray-800">Premium Digital Tools</h2>
        <p className="text-gray-400 mt-3 text-sm max-w-md mx-auto">
          Choose from our collection of premium digital tools designed to boost your productivity.
        </p>
        <div className="flex justify-center gap-3 mt-6">
          <button onClick={() => setActiveTab("tools")} className="btn btn-outline rounded-full px-6">Products</button>
          <button  onClick={() => setActiveTab("cart")} className="btn bg-purple-600 text-white border-none rounded-full px-6">Cart</button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Your Cart</h3>
        

        {carts.length === 0 ? (
        <p className="text-center text-lg font-bold text-gray-500 py-10">Cart is empty</p>
          
        ) : (
          <div className="flex flex-col gap-3">
            {carts.map((tool, i) => (
              <div key={i} className="flex items-center justify-between border border-gray-100 rounded-xl px-4 py-3 shadow-sm">
                <div className="flex items-center gap-4">
                  <img src={tool.image} alt={tool.title} className="h-20 w-20 object-contain bg-gray-50 rounded-lg p-1" />
                  <div>
                    <h4 className="text-sm font-bold text-gray-800">{tool.title}</h4>
                    <p className="text-xs text-gray-400">${tool.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(i)}
                  className="text-xs text-red-400 font-semibold hover:text-red-600 transition"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="flex justify-between items-center px-2 pt-4 border-t border-gray-100 mt-2">
              <span className="text-sm font-semibold text-gray-600">Total</span>
              <span className="text-lg font-black text-gray-800">${total}</span>
            </div>

            <button onClick={handleCheckOut} className="mt-4 w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl transition-all text-sm">
              Proceed To Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;