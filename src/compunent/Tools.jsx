import { use } from "react";
import ToolCard from "./ToolCard";

const Tools = ({ toolsPromise, carts, setCarts,setActiveTab}) => {
  const tools = use(toolsPromise);

  return (
    <div className="py-20 px-10 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-black text-gray-800">Premium Digital Tools</h2>
        <p className="text-gray-400 mt-3 text-sm max-w-md mx-auto">
          Choose from our collection of premium digital tools designed to boost your productivity.
        </p>
        <div className="flex justify-center gap-3 mt-6">
          <button  onClick={() => setActiveTab("tools")} className="btn bg-purple-600 text-white border-none rounded-full px-6">Products</button>
          <button onClick={() => setActiveTab("cart")}  className="btn btn-outline rounded-full px-6">Cart</button>
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} carts={carts} setCarts={setCarts} />
        ))}
      </div>
    </div>
  );
};

export default Tools;