'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "香りは選べますか？",
    answer: "あえて選べないことで、毎月の「ワクワク感」を大切にしています。調香師が季節や気候を考慮して、その時期に最適な香りをお届けします。"
  },
  {
    question: "香りの入れ替えは難しいですか？",
    answer: "パウチを容器に入れるだけなので、とても簡単です。面倒な詰め替え作業は一切不要で、誰でも簡単に交換できます。"
  },
  {
    question: "以前の香りが気になります。どうすればいいですか？",
    answer: "容器を中性洗剤で洗えば、前の香りをリセットできます。完全に乾燥させてから新しいパウチを入れることで、香りが混ざることなく楽しめます。"
  },
  {
    question: "解約はいつでもできますか？",
    answer: "はい、いつでも解約可能です。LINEから簡単に手続きができ、解約手数料などは一切かかりません。"
  },
  {
    question: "香りはどのくらい持続しますか？",
    answer: "お部屋の広さや環境にもよりますが、通常1ヶ月程度お楽しみいただけます。香りが薄くなってきたら、次の香りパウチをお楽しみください。"
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            よくある<span className="gradient-text">ご質問</span>
          </h2>
          <p className="text-xl text-gray-600">
            お客様からよくいただくご質問にお答えします
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}