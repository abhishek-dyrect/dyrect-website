"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const posts = [
  {
    category: "Product Updates",
    title: "Introducing AI-Powered Warranty Fraud Detection",
    excerpt: "Our new machine learning model can detect fraudulent claims with 98% accuracy, saving brands millions in false warranty payouts.",
    image: "/images/blog/blog-1.jpg",
    date: "Mar 15, 2024",
    readTime: "5 min read",
  },
  {
    category: "Industry Insights",
    title: "The Future of Post-Purchase Experience in 2024",
    excerpt: "How leading D2C brands are transforming customer relationships through intelligent warranty management.",
    image: "/images/blog/blog-2.jpg",
    date: "Mar 12, 2024",
    readTime: "8 min read",
  },
  {
    category: "Case Study",
    title: "How Boult Audio Reduced Support Tickets by 60%",
    excerpt: "A deep dive into how one of India&apos;s fastest-growing audio brands streamlined their warranty operations.",
    image: "/images/blog/blog-3.jpg",
    date: "Mar 8, 2024",
    readTime: "6 min read",
  },
];

export function Blog() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-medium text-primary mb-4"
            >
              FROM THE BLOG
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance"
            >
              Latest Insights
            </motion.h2>
          </div>
          
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href="#"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View all posts
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-muted">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <span className="text-sm">Blog Image</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-muted-foreground">{post.date}</span>
                <span className="text-xs text-muted-foreground">•</span>
                <span className="text-xs text-muted-foreground">{post.readTime}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors text-balance">
                {post.title}
              </h3>
              
              <p className="text-muted-foreground line-clamp-2">
                {post.excerpt}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
