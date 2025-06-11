'use client'

import { motion } from 'framer-motion'
import { AlertCircle, Package, Frown } from 'lucide-react'

const problems = [
  {
    icon: Package,
    title: "ディフューザーを買ったのはいいけど、1回使って終わり",
    description: "せっかく購入したのに、結局使わなくなってしまう..."
  },
  {
    icon: AlertCircle,
    title: "気づいたら香りが消えて、瓶だけ部屋の隅に...",
    description: "香りがなくなっても、新しいものを買うのを忘れがち"
  },
  {
    icon: Frown,
    title: "もっといろんな香りを気軽に楽しんでみたい",
    description: "でも、どの香りを選べばいいかわからない"
  }
]

export default function Problems() {
  return (
    <section className="py-20 bg-warm-beige relative overflow-hidden">

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-900 mb-6">
            こんなお悩み、
            <span className="gradient-text">ありませんか？</span>
          </h2>
          <p className="text-xl text-charcoal-600 font-light">
            香りを楽しみたい気持ちはあるけれど...
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-2xl hover:shadow-luxury transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-sage-100 to-sage-200 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <problem.icon className="w-8 h-8 text-sage-600" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal-900 mb-4 leading-tight font-serif">
                {problem.title}
              </h3>
              <p className="text-charcoal-600 leading-relaxed font-light">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}