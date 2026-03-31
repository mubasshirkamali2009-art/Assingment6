import { toast } from "react-toastify";

const ToolCard = ({ tool, carts, setCarts }) => {
  const isSubscribed = carts.some(item => item.id === tool.id);

  const handleSubscribe = () => {
    if (isSubscribed) {
      toast.error("Item already in cart");
      return;
    }
    setCarts([...carts, tool]);
    toast.success("Item added to cart successfully");
  };

  return (
    <div className="border border-gray-200 rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow relative bg-white">
      
      {tool.tag && (
        <div className={`absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full
          ${tool.tagType === "popular" ? "bg-orange-100 text-orange-500" :
            tool.tagType === "new" ? "bg-blue-100 text-blue-500" :
            tool.tagType === "best seller" ? "bg-red-100 text-red-500" :
            "bg-purple-100 text-purple-600"}`}>
          {tool.tag}
        </div>
      )}

      <div className="text-4xl mb-4">{tool.icon}</div>

      <h2 className="text-lg font-bold text-gray-800">{tool.name}</h2>
      <p className="text-gray-400 text-sm mt-1 leading-relaxed">{tool.description}</p>

      <div className="text-2xl font-black text-gray-800 mt-3">
        ${tool.price}
        <span className="text-sm font-normal text-gray-400"> /{tool.period}</span>
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
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-purple-600 text-white hover:bg-purple-700"}`}
      >
        {isSubscribed ? "Added to cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default ToolCard;