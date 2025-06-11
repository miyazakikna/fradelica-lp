'use client'

import { motion } from 'framer-motion'
import { MessageCircle, CreditCard, Package, Home, Heart } from 'lucide-react'

const steps = [
  {
    icon: MessageCircle,
    title: "LINE登録",
    description: "簡単30秒で登録完了"
  },
  {
    icon: CreditCard,
    title: "プランの選択",
    description: "あなたに合ったプランを選択"
  },
  {
    icon: Package,
    title: "毎月初旬に香りパウチが到着",
    description: "調香師が厳選した香りをお届け"
  },
  {
    icon: Home,
    title: "お部屋にふわっと香りが広がる",
    description: "パウチを容器に入れるだけ"
  },
  {
    icon: Heart,
    title: "来月の香りをお楽しみに...",
    description: "毎月新しい香りとの出会い"
  }
]

export default function Process() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            サービスの<span className="gradient-text">流れ</span>
          </h2>
          <p className="text-xl text-gray-600">
            簡単5ステップで香りのある生活を始められます
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary-200 transform -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="bg-white p-6 rounded-xl shadow-soft">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}