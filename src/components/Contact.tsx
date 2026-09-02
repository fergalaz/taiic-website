"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  title: string;
  org: string;
  email: string;
  reason: string;
}

const REASONS = [
  "Membership",
  "The Forum",
  "Sponsorship (Forum)",
  "Press",
  "Other",
];

const CONTACT_EMAIL = "info@insight-circle.ai";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    title: "",
    org: "",
    email: "",
    reason: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  // Per client spec: the form opens a prefilled email.
  // Replace with a form handler when one becomes available.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.reason) {
      setError("Please enter your name and a reason for contact.");
      return;
    }
    const body = [
      `Full name: ${formData.name}`,
      `Title: ${formData.title}`,
      `Firm or organization: ${formData.org}`,
      `Email: ${formData.email}`,
    ].join("\r\n");
    const subject = encodeURIComponent(`Website enquiry - ${formData.reason}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${encodeURIComponent(body)}`;
  };

  const inputClasses =
    "w-full bg-transparent border-0 border-b border-[color:var(--ink-warm)]/25 px-0 py-3 text-[color:var(--ink-warm)] placeholder:text-[color:var(--ink-warm)]/35 focus:border-gold focus:outline-none transition-colors duration-500 text-base font-light tracking-[0.01em]";

  const labelClasses =
    "block text-xs md:text-sm uppercase tracking-[0.28em] text-gold mb-3 font-bold";

  return (
    <section
      id="contact"
      className="bg-cream text-[color:var(--ink-warm)] pt-24 md:pt-32 pb-24 md:pb-32 px-6 md:px-10"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <motion.p
            className="text-sm md:text-base uppercase tracking-[0.4em] text-gold mb-6 font-bold"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          >
            Contact
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-light tracking-[0.02em] leading-[1.25]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
          >
            <strong className="font-bold">Contact</strong>.
          </motion.h2>

          <motion.p
            className="mt-12 text-base md:text-lg leading-[1.7] font-light max-w-[58ch] mx-auto text-[color:var(--ink-warm)]/75"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.2 }}
          >
            For enquiries regarding membership, the Forum, sponsorship of the
            Forum, or&nbsp;press.
          </motion.p>

          <motion.p
            className="mt-8 text-xl md:text-2xl font-light tracking-[0.01em]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.26 }}
          >
            Email —{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="border-b border-gold hover:text-gold transition-colors duration-500"
            >
              {CONTACT_EMAIL}
            </a>
          </motion.p>
        </div>

        <motion.div
          className="max-w-[640px] mx-auto border-t border-[color:var(--ink-warm)]/15 pt-14 md:pt-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="contact-name" className={labelClasses}>
                Full name
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="contact-title" className={labelClasses}>
                Title
              </label>
              <input
                type="text"
                id="contact-title"
                name="title"
                autoComplete="organization-title"
                value={formData.title}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="contact-org" className={labelClasses}>
                Firm or organization
              </label>
              <input
                type="text"
                id="contact-org"
                name="org"
                autoComplete="organization"
                value={formData.org}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="contact-email" className={labelClasses}>
                Email
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="contact-reason" className={labelClasses}>
                Reason for contact
              </label>
              <select
                id="contact-reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className={`${inputClasses} appearance-none cursor-pointer`}
              >
                <option value="" disabled>
                  Select a reason
                </option>
                {REASONS.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            {error && (
              <p className="text-red-500/80 text-sm tracking-wide">{error}</p>
            )}

            <div className="pt-6">
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-gold text-[color:var(--ink-warm)] px-12 py-4 text-sm md:text-base tracking-[0.18em] uppercase font-medium hover:brightness-110 transition-all duration-500"
              >
                Send enquiry
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
