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
 * 
 * TO USE YOUR OWN IMAGES:
 * 1. Place images in the /public/images/ folder
 * 2. Reference them using paths starting with "/images/"
 *    Example: imageUrl: "/images/my-artwork.jpg"
 * 3. Next.js automatically serves files from the /public folder
 */
export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Bandwidth Prophet",
    description: "Light becomes identity. Silence hums in binary.",
    imageUrl: "/images/1.png",
    price: 250,
    dimensions: "4096 × 4096",
    createdAt: "2024-10-15",
  },
  {
    id: "2",
    title: "Solar Gunslinger",
    description: "She aims at the horizon, where heat becomes code.",
    imageUrl: "/images/2.png",
    price: 320,
    dimensions: "4096 × 4096",
    createdAt: "2024-10-18",
  },
  {
    id: "3",
    title: "The Luminous Threshold",
    description: "One step from shadow into signal.",
    imageUrl: "/images/3.png",
    price: 180,
    dimensions: "4096 × 4096",
    createdAt: "2024-10-20",
  },
  {
    id: "4",
    title: "Cathedral of Code",
    description: "Faith flickers in gold and glass. The machine prays back.",
    imageUrl: "/images/4.png",
    price: 450,
    dimensions: "4096 × 4096",
    createdAt: "2024-10-22",
  },
]

