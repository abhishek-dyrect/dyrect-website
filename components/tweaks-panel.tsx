"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, X, ChevronDown, ChevronUp, Eye, EyeOff } from "lucide-react";
import { useTweaksStore } from "@/lib/tweaks-store";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";

const sectionGroups = [
  {
    name: "Core Sections",
    sections: [
      { key: "hero" as const, label: "Hero" },
      { key: "logoCloud" as const, label: "Logo Cloud" },
      { key: "platformOverview" as const, label: "Platform Overview" },
      { key: "products" as const, label: "Products" },
    ],
  },
  {
    name: "Features",
    sections: [
      { key: "personas" as const, label: "Personas" },
      { key: "capabilities" as const, label: "Capabilities" },
      { key: "stats" as const, label: "Stats" },
    ],
  },
  {
    name: "Social Proof",
    sections: [
      { key: "testimonials" as const, label: "Testimonials" },
      { key: "shopify" as const, label: "Shopify" },
      { key: "integrations" as const, label: "Integrations" },
    ],
  },
  {
    name: "Content",
    sections: [
      { key: "blog" as const, label: "Blog" },
      { key: "faq" as const, label: "FAQ" },
      { key: "finalCta" as const, label: "Final CTA" },
    ],
  },
];

export function TweaksPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState<string[]>(["Core Sections"]);
  const { sections, toggleSection, heroVariant, setHeroVariant } = useTweaksStore();

  const toggleGroup = (groupName: string) => {
    setExpandedGroups((prev) =>
      prev.includes(groupName)
        ? prev.filter((g) => g !== groupName)
        : [...prev, groupName]
    );
  };

  const allSectionsVisible = Object.values(sections).every((v) => v);
  const toggleAllSections = () => {
    const newState = !allSectionsVisible;
    Object.keys(sections).forEach((key) => {
      if (sections[key as keyof typeof sections] !== newState) {
        toggleSection(key as keyof typeof sections);
      }
    });
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
      >
        <Settings className="w-6 h-6" />
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-50"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-card border-l border-border z-50 overflow-y-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-foreground">Tweaks Panel</h2>
                  <p className="text-sm text-muted-foreground">Toggle sections and settings</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              <div className="p-4 space-y-6">
                {/* Hero Variant */}
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-foreground">Hero Variant</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {(["stacked", "centered"] as const).map((variant) => (
                      <button
                        key={variant}
                        onClick={() => setHeroVariant(variant)}
                        className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                          heroVariant === variant
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border text-muted-foreground hover:border-muted-foreground"
                        }`}
                      >
                        {variant.charAt(0).toUpperCase() + variant.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Toggle All */}
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm font-medium text-foreground">Show All Sections</span>
                  <button
                    onClick={toggleAllSections}
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                  >
                    {allSectionsVisible ? (
                      <Eye className="w-5 h-5 text-primary" />
                    ) : (
                      <EyeOff className="w-5 h-5 text-muted-foreground" />
                    )}
                  </button>
                </div>

                {/* Section Groups */}
                <div className="space-y-2">
                  {sectionGroups.map((group) => (
                    <div key={group.name} className="border border-border rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleGroup(group.name)}
                        className="w-full flex items-center justify-between p-3 hover:bg-muted/50 transition-colors"
                      >
                        <span className="text-sm font-medium text-foreground">{group.name}</span>
                        {expandedGroups.includes(group.name) ? (
                          <ChevronUp className="w-4 h-4 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-muted-foreground" />
                        )}
                      </button>

                      <AnimatePresence>
                        {expandedGroups.includes(group.name) && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="p-3 pt-0 space-y-3">
                              {group.sections.map((section) => (
                                <div
                                  key={section.key}
                                  className="flex items-center justify-between"
                                >
                                  <span className="text-sm text-muted-foreground">
                                    {section.label}
                                  </span>
                                  <Switch
                                    checked={sections[section.key]}
                                    onCheckedChange={() => toggleSection(section.key)}
                                  />
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                {/* Info */}
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-xs text-muted-foreground">
                    Use this panel to preview different section combinations and configurations. 
                    Changes are temporary and for preview purposes only.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
