import React from "react";
const Footer = () => {
  return (
    <footer className="bg-[#101727] text-gray-500 px-10 py-10">
      <div className="flex flex-wrap justify-between gap-10 pb-10 border-b border-base-300">
        <div className="max-w-xs">
          <h2 className="text-xl font-bold text-white mb-3">
            Digi<span className="text-primary">Tools</span>
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Empowering creators and developers with next-generation AI tools.
            Build smarter, faster, and better.
          </p>
        </div>
        <div>
          <h4 className="footer-title">Product</h4>
          {["About", "Features", "Pricing", "Changelog", "Docs"].map((item) => (
            <a key={item} href="#" className="link link-hover block mb-1 text-sm">{item}</a>
          ))}
        </div>
        <div>
          <h4 className="footer-title">Company</h4>
          {["Blog", "Templates", "Integrations", "Affiliates", "Cases"].map((item) => (
            <a key={item} href="#" className="link link-hover block mb-1 text-sm">{item}</a>
          ))}
        </div>
        <div>
          <h4 className="footer-title">Resources</h4>
          {["Help Docs", "Help Center", "Help Blog", "Help FAQ", "Contact"].map((item) => (
            <a key={item} href="#" className="link link-hover block mb-1 text-sm">{item}</a>
          ))}
        </div>
        <div>
          <h4 className="footer-title">Follow Us</h4>
          <div className="flex gap-3 mt-1">
            <a href="#" className="btn btn-circle btn-sm btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a href="#" className="btn btn-circle btn-sm btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="btn btn-circle btn-sm btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" className="btn btn-circle btn-sm btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-between items-center pt-6 text-xs text-gray-500 gap-4">
        <p>© 2024 DigiTools. All rights reserved.</p>
        <div className="flex gap-5">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
            <a key={item} href="#" className="link link-hover">{item}</a>
          ))}
        </div>
      </div>

      {/* ✅ Big watermark text added here */}
      <div className="text-center overflow-hidden mt-2">
        <span
          style={{
            fontSize: "clamp(50px, 10vw, 110px)",
            fontWeight: "900",
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.06)",
            letterSpacing: "10px",
            userSelect: "none",
            lineHeight: "1",
          }}
        >
          DIGITOOLS
        </span>
      </div>

    </footer>
  );
};
export default Footer;