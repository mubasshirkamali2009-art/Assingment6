import { useState } from "react";
import { toast } from "react-toastify";
const ToolCard = ({ tool, carts, setCarts }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (isSubscribed) ;
    setIsSubscribed(true);
     const isFound=carts.find(item=>item.id === tool.id)
    if(isFound){
      toast.error("Item aiready in cart")
      return
    }
    setCarts([...carts,tool])
     toast.success("Item added to cart successfully")
  };

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-2xl hover:shadow-lg transition-shadow relative ">
      {tool.badge && (
        <div className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full z-10
          ${tool.badge === "New Seller" ? "bg-green-100 text-green-600" :
            tool.badge === "Popular" ? "bg-orange-100 text-orange-500" :
            tool.badge === "New" ? "bg-blue-100 text-blue-500" :
            tool.badge === "Best Seller" ? "bg-red-100 text-red-500" :
            "bg-purple-100 text-purple-600"}`}>
          {tool.badge}
        </div>
      )}

      <div className="flex justify-center items-center bg-gray-50 py-8  ">
        <img   src={tool.image} alt={tool.title} className="h-80 w-80 object-contain" />
      </div>

      <div className="p-5">
        <h2 className="text-lg font-bold text-gray-800">{tool.title}</h2>
        <p className="text-gray-400 text-sm mt-1 leading-relaxed">{tool.description}</p>

        <div className="text-2xl font-black text-gray-800 mt-3">
          ${tool.price}
          <span className="text-sm font-normal text-gray-400"> /Month</span>
        </div>

        <ul className="mt-3 flex flex-col gap-1">
          {tool.features?.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="#7c3aed" strokeWidth="2.5" viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        <button
          onClick={handleSubscribe}
          className={`mt-5 w-full py-3 rounded-xl font-bold text-sm transition-all
            ${isSubscribed
              ? "bg-gray-200 text-gray-500 "
              : "bg-purple-600 text-white hover:bg-purple-700"}`}
        >
          {isSubscribed ? "Subscribed" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default ToolCard;