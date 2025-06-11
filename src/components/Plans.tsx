'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'

const plans = [
  {
    name: "スタンダードプラン",
    price: "2,000",
    originalPrice: "2,500",
    features: [
      "香りパウチ（1ヶ月分）",
      "ノーマルスティック",
      "初回ノーマル容器付き"
    ],
    note: "初回のみ+500円（キャンペーンで無料予定）",
    popular: false
  },
  {
    name: "プレミアムプラン",
    price: "2,500",
    features: [
      "香りパウチ（1ヶ月分）",
      "フラワースティック",
      "初回プレミアム容器付き",
      "香りの詳細カード付き"
    ],
    note: "最も人気のプランです",
    popular: true
  }
]

export default function Plans() {
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
            選べる<span className="gradient-text">2つのプラン</span>
          </h2>
          <p className="text-xl text-gray-600">
            あなたのライフスタイルに合わせてお選びください
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative bg-white p-8 rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-primary-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    人気No.1
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-center justify-center gap-2 mb-2">
                  {plan.originalPrice && (
                    <span className="text-lg text-gray-400 line-through">
                      ¥{plan.originalPrice}
                    </span>
                  )}
                  <span className="text-4xl font-bold text-gray-900">
                    ¥{plan.price}
                  </span>
                  <span className="text-gray-600">/月</span>
                </div>
                <p className="text-sm text-gray-500">+ 送料</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm text-gray-500 mb-6 text-center">
                {plan.note}
              </p>

              <button className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                plan.popular
                  ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-glow'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
              }`}>
                このプランを選ぶ
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}