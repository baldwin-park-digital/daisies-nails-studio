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
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=600&fit=crop",
    alt: "Elegant manicure with gold accents",
    title: "Gold Elegance",
    category: "Manicures",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800&h=600&fit=crop",
    alt: "Intricate nail art design",
    title: "Custom Nail Art",
    category: "Nail Art",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&h=600&fit=crop",
    alt: "French tip manicure",
    title: "Classic French",
    category: "Manicures",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&h=600&fit=crop",
    alt: "Spa pedicure treatment",
    title: "Spa Pedicure",
    category: "Pedicures",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1599948128020-9a44d19e2c7f?w=800&h=600&fit=crop",
    alt: "Ombre gradient nails",
    title: "Ombre Gradient",
    category: "Nail Art",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&h=600&fit=crop",
    alt: "Gel manicure application",
    title: "Gel Perfection",
    category: "Manicures",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=600&fit=crop",
    alt: "Pastel pink nail polish",
    title: "Pastel Dreams",
    category: "Manicures",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=800&h=600&fit=crop",
    alt: "Floral nail art design",
    title: "Floral Fantasy",
    category: "Nail Art",
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?w=800&h=600&fit=crop",
    alt: "Chrome finish nails",
    title: "Chrome Shine",
    category: "Nail Art",
  },
];
