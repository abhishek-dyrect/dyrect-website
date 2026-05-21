"use client";

import { create } from "zustand";

export interface TweakState {
  heroVariation: "stacked" | "centered";
  primaryColor: string;
  density: "compact" | "default" | "airy";
  show_logos: boolean;
  show_platform: boolean;
  show_products: boolean;
  show_personas: boolean;
  show_capabilities: boolean;
  show_stats: boolean;
  show_testimonials: boolean;
  show_shopify: boolean;
  show_integrations: boolean;
  show_blog: boolean;
  show_faq: boolean;
  show_cta: boolean;
  setTweak: <K extends keyof Omit<TweakState, "setTweak">>(
    key: K,
    value: TweakState[K]
  ) => void;
}

export const useTweaks = create<TweakState>((set) => ({
  heroVariation: "stacked",
  primaryColor: "#2437F6",
  density: "default",
  show_logos: true,
  show_platform: true,
  show_products: true,
  show_personas: true,
  show_capabilities: true,
  show_stats: true,
  show_testimonials: true,
  show_shopify: true,
  show_integrations: true,
  show_blog: true,
  show_faq: true,
  show_cta: true,
  setTweak: (key, value) => set((state) => ({ ...state, [key]: value })),
}));
