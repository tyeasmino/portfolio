'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Send, CheckCircle } from 'lucide-react'
import groupDiscussion from 'public/groupDiscuss.png'
import invertedGroupDiscussion from 'public/invertedGroupDiscuss-modified.png'
import Image from 'next/image'

export default function ContactMe() {
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    setError("");
    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get("email");

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!emailRegex.test(email as string)) {
      setError("Please enter a valid email address.");
      return;
    }

    formData?.append("access_key", "36597e36-fd00-4f8e-8ac6-bbce022f275b");

    const object = Object?.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });

    const result = await response?.json();
    if (result.success) {
      setSuccess(true);
      (event.target as HTMLFormElement).reset(); 
      setTimeout(() => setSuccess(false), 4000);
    } else {
      setError("Something went wrong. Please try again.");
    }
  }


  return (
    <>
      <section id="contactMe" className="scroll-mt-24 px-4 py-12 md:py-20 "
      >

        <div className='flex items-center justify-between'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-white flex items-center justify-center gap-2">
              <Mail className="w-7 h-7" />
              Contact Me
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-10 text-lg">
              Have a project in mind or just want to say hi? Feel free to drop a message!
            </p>


            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border rounded-md bg-transparent dark:border-gray-700 border-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 border rounded-md bg-transparent dark:border-gray-700 border-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
              />
              {error && (
                <p className="text-red-500 text-sm -mt-4">{error}</p>
              )}
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                className="w-full px-4 py-3 border rounded-md bg-transparent dark:border-gray-700 border-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
              ></textarea>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-md font-semibold hover:opacity-90 transition"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>

            {/* Success Message Animation */}
            <AnimatePresence>
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="mt-8 flex items-center gap-3 justify-center text-green-600 dark:text-green-400 font-medium"
                >
                  <CheckCircle className="w-6 h-6" />
                  Message sent successfully!
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <div className="w-full max-w-sm mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              whileHover={{ scale: 1.05 }} // Add hover animation
              className="w-full h-auto object-cover rounded-2xl shadow-lg dark:shadow-white/10 shadow-black/20"
            >
              <Image
                src={groupDiscussion}
                alt='Group Discussion' className='dark:hidden' />
              <Image
                src={invertedGroupDiscussion}
                alt='Group Discussion' className='hidden dark:block' />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
