'use client'
import { Code, Database, Smartphone, LayoutDashboard, FileText, User, CreditCard } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
    {
        icon: <Code className="w-8 h-8" />,
        title: 'Modern Web Development',
        description: 'Build fast, scalable websites using React, Next.js, Tailwind CSS, and Framer Motion.',
    },
    {
        icon: <Smartphone className="w-8 h-8" />,
        title: 'Responsive UI Design',
        description: 'Mobile-first, pixel-perfect interfaces tailored for all screen sizes.',
    },
    {
        icon: <Database className="w-8 h-8" />,
        title: 'Backend & API Integration',
        description: 'Powerful APIs with Django REST Framework, PostgreSQL, and secure auth.',
    },
    {
        icon: <LayoutDashboard className="w-8 h-8" />,
        title: 'Admin Dashboards',
        description: 'Dynamic dashboards to manage users, data, and reports with beautiful UI/UX.',
    },
    {
        icon: <FileText className="w-8 h-8" />,
        title: 'Report Automation',
        description: 'Word/PDF processing systems to split, group, and deliver reports efficiently.',
    },
    {
        icon: <User className="w-8 h-8" />,
        title: 'Personal Portfolio & Resume Sites',
        description: 'Showcase your work professionally with elegant, animated portfolio pages.',
    },
    {
        icon: <CreditCard className="w-8 h-8" />,
        title: 'Payment Gateway Integration',
        description: 'Integrate secure and user-friendly payment systems like Stripe or SSLCommerz for e-commerce, donations, or service payments.',
    },

]

const ServicesComponent = () => {
    return (
        <section id="services" className="scroll-mt-24 py-16  ">
            <div className="mx-auto px-4">
                <motion.h2
                    className="text-3xl font-bold text-center mb-12 dark:text-white"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    What I Can Do For You
                </motion.h2>

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-black/30 border dark:border-white/10 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <div className="text-black dark:text-white mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2 dark:text-white">{service.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesComponent