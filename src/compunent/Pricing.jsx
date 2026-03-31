import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      tag: "Perfect for getting started",
      price: "$0",
      period: "/Month",
      features: [
        "Access to 10 free tools",
        "Basic Resources",
        "Community support",
        "1 project per month",
      ],
      btn: "Get Started Free",
      highlight: false,
    },
    {
      name: "Pro",
      tag: "Best for professionals",
      price: "$29",
      period: "/Month",
      badge: "POPULAR",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics",
      ],
      btn: "Start Free Trial",
      highlight: true,
    },
    {
      name: "Enterprise",
      tag: "For teams and businesses",
      price: "$99",
      period: "/Month",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding",
      ],
      btn: "Contact Sales",
      highlight: false,
    },
  ];

  return (
    <section className="bg-white py-20 px-10">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-black text-gray-800">Simple, Transparent Pricing</h2>
        <p className="text-gray-400 mt-3 text-sm">Choose the plan that fits your needs. Upgrade or downgrade at any time.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-center">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`rounded-2xl p-8 relative flex flex-col gap-4 ${
              plan.highlight
                ? "bg-purple-600 text-white shadow-2xl scale-105"
                : "border border-gray-200 text-gray-700"
            }`}
          >
            {plan.badge && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-800 text-xs font-bold px-4 py-1 rounded-full">
                {plan.badge}
              </div>
            )}

            <div>
              <h3 className={`text-lg font-bold ${plan.highlight ? "text-white" : "text-gray-800"}`}>
                {plan.name}
              </h3>
              <p className={`text-xs mt-1 ${plan.highlight ? "text-purple-200" : "text-gray-400"}`}>
                {plan.tag}
              </p>
            </div>

            <div className="flex items-end gap-1">
              <span className={`text-4xl font-black ${plan.highlight ? "text-white" : "text-gray-800"}`}>
                {plan.price}
              </span>
              <span className={`text-sm mb-1 ${plan.highlight ? "text-purple-200" : "text-gray-400"}`}>
                {plan.period}
              </span>
            </div>

            <ul className="flex flex-col gap-2">
              {plan.features.map((feature, j) => (
                <li key={j} className="flex items-center gap-2 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke={plan.highlight ? "#fff" : "#7c3aed"} strokeWidth="2.5" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span className={plan.highlight ? "text-purple-100" : "text-gray-500"}>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`mt-4 w-full py-3 rounded-xl font-bold text-sm transition-all ${
                plan.highlight
                  ? "bg-white text-purple-600 hover:bg-purple-50"
                  : "border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
              }`}
            >
              {plan.btn}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;