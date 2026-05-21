"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to set up Dyrect?",
    answer: "Most brands are up and running within 24-48 hours. Our Shopify integration takes just a few clicks, and our team provides hands-on onboarding support to ensure a smooth transition.",
  },
  {
    question: "Do I need technical expertise to use Dyrect?",
    answer: "Not at all. Dyrect is designed for non-technical teams. Our intuitive interface and drag-and-drop portal builder make it easy for anyone to customize their warranty experience without writing code.",
  },
  {
    question: "Can Dyrect integrate with my existing systems?",
    answer: "Yes! We integrate with 50+ platforms including Shopify, WooCommerce, Salesforce, HubSpot, Zendesk, and more. We also offer a robust API for custom integrations.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide 24/7 email and chat support for all plans. Enterprise customers get a dedicated account manager, priority phone support, and custom SLAs.",
  },
  {
    question: "Is my data secure with Dyrect?",
    answer: "Absolutely. We are SOC 2 Type II certified and GDPR compliant. All data is encrypted at rest and in transit, and we conduct regular security audits.",
  },
  {
    question: "Can I try Dyrect before committing?",
    answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required. You can also request a personalized demo from our team.",
  },
];

function FAQItem({ faq, isOpen, onClick }: { faq: typeof faqs[0]; isOpen: boolean; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-b border-border"
    >
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full py-6 text-left"
      >
        <span className="text-lg font-medium text-foreground pr-8">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-muted-foreground pr-12">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-medium text-primary mb-4"
            >
              FAQ
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance"
            >
              Frequently Asked Questions
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              Everything you need to know about Dyrect
            </motion.p>
          </div>
          
          <div>
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-4">
              Still have questions?
            </p>
            <a
              href="#"
              className="text-primary font-medium hover:underline"
            >
              Contact our support team →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
