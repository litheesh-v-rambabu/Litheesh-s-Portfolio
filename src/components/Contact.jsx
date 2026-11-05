import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const inputBase =
  "w-full py-3 px-4 sm:py-4 sm:px-5 rounded-xl text-white text-[13px] sm:text-[14px] font-medium outline-none transition-all duration-200 placeholder:text-[#6b7280]";
const inputStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.10)",
};
const inputFocusStyle = {
  background: "rgba(255,255,255,0.07)",
  border: "1px solid rgba(124, 242, 201,0.5)",
  boxShadow: "0 0 0 3px rgba(124, 242, 201,0.08)",
};

const FloatInput = ({ label, ...props }) => {
  const [focused, setFocused] = useState(false);
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[13px] font-semibold text-[#8b93a8] uppercase tracking-wider">
        {label}
      </span>
      {props.textarea ? (
        <textarea
          rows={4}
          className={`${inputBase} resize-none`}
          style={focused ? inputFocusStyle : inputStyle}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
          textarea={undefined}
        />
      ) : (
        <input
          className={inputBase}
          style={focused ? inputFocusStyle : inputStyle}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
      )}
    </label>
  );
};

const CONTACT_API_URL =
  import.meta.env.VITE_CONTACT_API_URL || "/api/contact.php";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSent(false);

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }

      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">

      {/* ── Form card ── */}
      {/* Outer gradient border wrapper */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] green-pink-gradient p-[1px] rounded-2xl shadow-card"
      >
        <div className="bg-[#0d1226] rounded-2xl p-6 sm:p-8 md:p-10">

          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-6"
          >
            <FloatInput
              label="Your Name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Litheesh Velakaturi"
              required
            />
            <FloatInput
              label="Email Address"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="yourmail@gmail.com"
              required
            />
            <FloatInput
              label="Message"
              textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What would you like to discuss?"
              required
            />

            {/* Submit */}
            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={loading}
                className="green-pink-gradient p-[1px] rounded-xl shadow-card w-fit"
              >
                <div
                  className="bg-[#0d1226] hover:bg-[#131830] transition-colors duration-200 rounded-xl px-8 py-3 text-white font-semibold text-[14px] flex items-center gap-2 min-w-[130px] justify-center"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    "Send Message →"
                  )}
                </div>
              </button>

              {sent && (
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-[#7cf2c9] text-[13px] font-medium"
                >
                  ✓ Message sent! I'll get back to you soon.
                </motion.p>
              )}

              {error && (
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-[#f27272] text-[13px] font-medium"
                >
                  {error}
                </motion.p>
              )}
            </div>
          </form>
        </div>
      </motion.div>

      {/* ── Earth canvas ── */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[260px] sm:h-[320px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
