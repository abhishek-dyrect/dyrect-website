"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Shopify() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="relative bg-[#95BF47]/10 rounded-3xl p-12 md:p-16 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#95BF47]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#95BF47]/10 rounded-full blur-2xl" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#95BF47]/20 text-[#5E8E3E] text-sm font-medium mb-6">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.54 4.83l-1.29-.13-.25-.67c-.04-.1-.12-.17-.22-.19l-.97-.13c-.13-1.06-.71-2.03-1.89-2.03h-.07c-.29-.36-.65-.55-1.01-.55-2.5.05-3.7 3.12-4.08 4.71l-1.74.54c-.54.17-.56.19-.63.7L4.36 15.7l9.85 1.84 5.33-1.16c0-.01-2-11.44-2-11.55zM12.5 3.72l.01 2.54-2.43.75c.47-1.81 1.36-2.91 2.42-3.29zm-.87-.91c.16 0 .32.06.46.17-.11.06-.22.13-.33.22-.8.7-1.42 1.78-1.73 2.97l-1.95.6c.4-1.4 1.56-3.96 3.55-3.96zm.4 9.74c-.09-.05-.98-.52-2.18-.52-.38 0-.77.04-1.16.13-.03-.19-.06-.39-.06-.61 0-2.33 1.36-4.03 3.4-4.03 1.4 0 2.45.73 2.45 1.87 0 1.51-1.37 2.61-2.45 3.16zm.52-5.38V5.01c1.11-.11 1.67.82 1.67.82l1.08-.4s-.48-1.16-2.21-1.16h-.13c-.11 0-.22.01-.33.02V3.4c0-.1-.1-.17-.2-.15l-.87.12c-.1.01-.17.1-.17.2v1.52c-.18.05-.36.11-.53.18l.57 1.67c.13-.04.26-.08.39-.11v5.71c1.09-.55 2.45-1.65 2.45-3.16 0-.31-.06-.59-.17-.85z"/>
                </svg>
                Shopify Integration
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Built for Shopify Merchants
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Seamlessly integrate with your Shopify store. Auto-sync products, orders, and customer data. Get started in minutes with our one-click installation.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#5E8E3E] text-white rounded-full font-medium hover:bg-[#4a7030] transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.54 4.83l-1.29-.13-.25-.67c-.04-.1-.12-.17-.22-.19l-.97-.13c-.13-1.06-.71-2.03-1.89-2.03h-.07c-.29-.36-.65-.55-1.01-.55-2.5.05-3.7 3.12-4.08 4.71l-1.74.54c-.54.17-.56.19-.63.7L4.36 15.7l9.85 1.84 5.33-1.16c0-.01-2-11.44-2-11.55z"/>
                  </svg>
                  Install on Shopify
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
                
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-full font-medium hover:bg-accent transition-colors"
                >
                  View Documentation
                </motion.a>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-2xl shadow-xl p-6 border border-border"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#95BF47]/20 rounded-lg flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="#5E8E3E">
                        <path d="M17.54 4.83l-1.29-.13-.25-.67c-.04-.1-.12-.17-.22-.19l-.97-.13c-.13-1.06-.71-2.03-1.89-2.03h-.07c-.29-.36-.65-.55-1.01-.55-2.5.05-3.7 3.12-4.08 4.71l-1.74.54c-.54.17-.56.19-.63.7L4.36 15.7l9.85 1.84 5.33-1.16c0-.01-2-11.44-2-11.55z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Your Store</p>
                      <p className="text-sm text-muted-foreground">Connected</p>
                    </div>
                    <div className="ml-auto w-2 h-2 bg-green-500 rounded-full" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm text-muted-foreground">Products Synced</span>
                      <span className="font-semibold text-foreground">2,847</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm text-muted-foreground">Orders Today</span>
                      <span className="font-semibold text-foreground">156</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm text-muted-foreground">Warranties Active</span>
                      <span className="font-semibold text-foreground">12,493</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
