/**
 * Image data structure and mock data
 * This file contains the TypeScript interface for artwork and sample data
 * In a real application, this would come from a database or API
 */

export interface Artwork {
  id: string
  title: string
  description: string
  imageUrl: string
  price: number // Price in sats
  dimensions: string
  createdAt: string
  isPurchased?: boolean
}

/**
 * Sample artwork collection
 * Using Unsplash images as placeholders for demonstration
 * These represent AI-generated artwork that would be sold
 * Prices are in satoshis (sats)
 */
export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Cyber Dreams",
    description: "A futuristic cyberpunk landscape",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    price: 250,
    dimensions: "4096 × 4096",
    createdAt: "2024-10-15",
  },
  {
    id: "2",
    title: "Neon Nights",
    description: "Vibrant neon-lit urban scenery",
    imageUrl: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&q=80",
    price: 320,
    dimensions: "3840 × 2160",
    createdAt: "2024-10-18",
  },
  {
    id: "3",
    title: "Digital Horizon",
    description: "Abstract digital art with geometric patterns",
    imageUrl: "https://images.unsplash.com/photo-1614850715649-1d0106293bd1?w=800&q=80",
    price: 180,
    dimensions: "4096 × 4096",
    createdAt: "2024-10-20",
  },
  {
    id: "4",
    title: "Cosmic Voyage",
    description: "Space exploration themed artwork",
    imageUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80",
    price: 450,
    dimensions: "5120 × 2880",
    createdAt: "2024-10-22",
  },
  {
    id: "5",
    title: "Aurora Borealis",
    description: "Northern lights with a futuristic twist",
    imageUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80",
    price: 380,
    dimensions: "4096 × 4096",
    createdAt: "2024-10-25",
  },
  {
    id: "6",
    title: "Quantum Realm",
    description: "Microscopic quantum world visualization",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    price: 420,
    dimensions: "3840 × 2160",
    createdAt: "2024-10-27",
  },
  {
    id: "7",
    title: "Mechanical Dreams",
    description: "Intricate mechanical structures and gears",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    price: 95,
    dimensions: "4096 × 4096",
    createdAt: "2024-10-28",
  },
  {
    id: "8",
    title: "Neural Network",
    description: "AI-inspired neural pathway visualization",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
    price: 500,
    dimensions: "4096 × 4096",
    createdAt: "2024-10-30",
  },
]

