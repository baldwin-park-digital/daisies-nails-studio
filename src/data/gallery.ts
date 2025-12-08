export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  category?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    alt: "Modern interior design",
    title: "Modern Living Space",
    category: "Interior",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    alt: "Contemporary home exterior",
    title: "Contemporary Architecture",
    category: "Exterior",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
    alt: "Minimalist kitchen",
    title: "Minimalist Kitchen",
    category: "Interior",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    alt: "Bedroom design",
    title: "Serene Bedroom",
    category: "Interior",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
    alt: "Office space",
    title: "Creative Office",
    category: "Commercial",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop",
    alt: "Outdoor patio",
    title: "Outdoor Living",
    category: "Exterior",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop",
    alt: "Bathroom design",
    title: "Spa Bathroom",
    category: "Interior",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&h=600&fit=crop",
    alt: "Dining room",
    title: "Elegant Dining",
    category: "Interior",
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop",
    alt: "Storefront design",
    title: "Modern Storefront",
    category: "Commercial",
  },
];
