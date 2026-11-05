import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { contacts } from "../constants";

const Footer = () => {
  const socialLinks = contacts.filter((c) => c.type === "link");
  const emailContact = contacts.find((c) => c.type === "copy" && c.value?.includes("@"));

  return (
    <footer className="relative w-full">
      {/* Gradient top border */}
      <div
        className="w-full h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #7cf2c9 30%, #8f7bff 70%, transparent 100%)",
        }}
      />

      <div className="w-full bg-[#05060a]/80 backdrop-blur-sm py-8 sm:py-10 px-6 sm:px-16">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">

          {/* ── Branding ── */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <span
                className=" font-black text-[20px] xs:text-[32px] sm:text-[24px] leading-tight"
                style={{
                  background: "transparent",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "white",
                  backgroundClip: "text",
                }}
              >
                Litheesh V R
              </span>
            </Link>
            <p className="text-secondary text-[12px]">AI &amp; ML Engineer</p>
            <p className="text-[#4b5563] text-[11px] mt-0.5">
              Built with ✌️
            </p>
          </div>

          {/* ── Icons + copyright ── */}
          <div className="flex flex-col items-center sm:items-end gap-3">

            {/* Social + Email icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((contact) => (
                <motion.a
                  key={contact.name}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  title={contact.name}
                  className="opacity-70 hover:opacity-100 transition-opacity duration-200"
                >
                  <img
                    src={contact.icon}
                    alt={contact.name}
                    className="w-6 h-6 object-contain"
                  />
                </motion.a>
              ))}

              {/* Email icon */}
              {emailContact && (
                <motion.a
                  href={emailContact.link}
                  whileHover={{ scale: 1.2, y: -2 }}
                  title={emailContact.value}
                  className="opacity-70 hover:opacity-100 transition-opacity duration-200"
                >
                  <img
                    src={emailContact.icon}
                    alt="Email"
                    className="w-6 h-6 object-contain"
                  />
                </motion.a>
              )}
            </div>

            <p className="text-[#4b5563] text-[11px]">
              &copy; {new Date().getFullYear()} Litheesh. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
