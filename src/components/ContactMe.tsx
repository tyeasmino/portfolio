'use client'
import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'

const ContactMe = () => {
  return (
    <section
      id="contact"
      className="px-4 py-12 md:py-20 lg:px-24 bg-white dark:bg-black"
    >
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

        {/* Simple Contact Box */}
        <form
          onSubmit={(e) => {
            e.preventDefault()
            alert('This is a placeholder form!')
          }}
          className="space-y-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 border rounded-md bg-transparent dark:border-gray-700 border-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 border rounded-md bg-transparent dark:border-gray-700 border-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            required
            className="w-full px-4 py-3 border rounded-md bg-transparent dark:border-gray-700 border-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
          ></textarea>

          <button disabled
            type="submit"
            className="  inline-flex items-center justify-center gap-2 bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-md font-semibold hover:opacity-90 transition"
          >
            Send Message <Send className="w-4 h-4" />
          </button>
        </form>
      </motion.div>
    </section>
  )
}

export default ContactMe
