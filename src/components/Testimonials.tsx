'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    text: "開けるたびに「今日はどんな香り?」ってワクワクする",
    author: "田中さん（30代女性）",
    rating: 5
  },
  {
    text: "香りのクオリティが高くて、市販品とは全然違います",
    author: "佐藤さん（40代男性）",
    rating: 5
  },
  {
    text: "ホテルのような上質な空間になって、友人にも褒められます",
    author: "山田さん（20代女性）",
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            お客様の<span className="gradient-text">声</span>
          </h2>
          <p className="text-xl text-gray-600">
            多くの方にご愛用いただいています
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl relative"
            >
              <Quote className="w-8 h-8 text-primary-300 mb-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <p className="text-gray-500 font-medium">
                {testimonial.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}