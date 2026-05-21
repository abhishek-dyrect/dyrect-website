"use client";

import { motion } from "framer-motion";

const integrations = [
  { name: "Shopify", icon: "shopify" },
  { name: "WooCommerce", icon: "woocommerce" },
  { name: "Magento", icon: "magento" },
  { name: "BigCommerce", icon: "bigcommerce" },
  { name: "Salesforce", icon: "salesforce" },
  { name: "HubSpot", icon: "hubspot" },
  { name: "Zendesk", icon: "zendesk" },
  { name: "Freshdesk", icon: "freshdesk" },
  { name: "Slack", icon: "slack" },
  { name: "Zapier", icon: "zapier" },
  { name: "NetSuite", icon: "netsuite" },
  { name: "SAP", icon: "sap" },
];

function IntegrationIcon({ name }: { name: string }) {
  // Simple placeholder icons - in production, use actual brand logos
  return (
    <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center text-muted-foreground font-semibold text-xs">
      {name.slice(0, 2).toUpperCase()}
    </div>
  );
}

export function Integrations() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-primary mb-4"
          >
            INTEGRATIONS
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance"
          >
            Connect Your Entire Stack
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Dyrect integrates with your favorite e-commerce platforms, CRMs, help desks, and more. Set up in minutes, not days.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="flex flex-col items-center gap-3 p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all cursor-pointer"
            >
              <IntegrationIcon name={integration.name} />
              <span className="text-sm font-medium text-foreground">{integration.name}</span>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="text-primary font-medium hover:underline"
          >
            View all 50+ integrations →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
