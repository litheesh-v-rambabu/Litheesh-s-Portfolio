import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { contacts } from "../constants";
import { fadeIn } from "../utils/motion";

const Footer = () => {
  const socialLinks = contacts.filter((contact) => contact.type === "link");

  return (
    <motion.footer
      variants={fadeIn("", "tween", 0.2, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.paddingX} w-full py-8 bg-black-100/50`}
    >
      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
        <div className="text-center sm:text-left">
          <p className="text-secondary text-sm">
            &copy; {new Date().getFullYear()} Kushvith. All rights reserved.
          </p>
          <div className="mt-2 flex gap-4 justify-center sm:justify-start">
            <Link to="/privacy-policy" className="text-secondary text-sm hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className="flex flex-row gap-6">
          {socialLinks.map((contact) => (
            <a
              key={contact.name}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-125"
            >
              <img
                src={contact.icon}
                alt={contact.name}
                className="w-7 h-7 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;