export interface GalleryImage {
  id: string;
  src: { src: string; width: number; height: number };
  alt: string;
  title?: string;
  category?: string;
}

import goldAccentedNails from '../assets/nail-gallery/gold-accented-nails.jpg';
import blackNails from '../assets/nail-gallery/black-nails.jpg';
import patternedNails from '../assets/nail-gallery/patterned-nails.jpg';
import greenGoldNails from '../assets/nail-gallery/green-gold-nails.jpg';
import pinkFlowerNails from '../assets/nail-gallery/pink-flower-nails.jpg';
import silverNails from '../assets/nail-gallery/silver-nails.jpg';
import redStilettoNails from '../assets/nail-gallery/red-stiletto-nails.jpg';
import redCoffinNails from '../assets/nail-gallery/red-coffin-nails.jpg';
import pinkNails from '../assets/nail-gallery/pink-nails.jpg';

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: goldAccentedNails,
    alt: "Gold accented nails with art",
    title: "Gold Accented Nails",
    category: "Gold, Art",
  },
  {
    id: "2",
    src: blackNails,
    alt: "Black nails",
    title: "Classic Black Nails",
    category: "Black, Classic",
  },
  {
    id: "3",
    src: patternedNails,
    alt: "Nails with abstract pattern",
    title: "Patterned Nails",
    category: "Pattern, Art",
  },
  {
    id: "4",
    src: greenGoldNails,
    alt: "Green and gold nails",
    title: "Green & Gold Nails",
    category: "Green, Gold",
  },
  {
    id: "5",
    src: pinkFlowerNails,
    alt: "Pink nails with floral art",
    title: "Pink Floral Nails",
    category: "Pink, Floral",
  },
  {
    id: "6",
    src: silverNails,
    alt: "Silver chrome nails",
    title: "Silver Chrome Nails",
    category: "Silver, Chrome",
  },
  {
    id: "7",
    src: redStilettoNails,
    alt: "Red nails",
    title: "Red Nails",
    category: "Red, Classic",
  },
  {
    id: "8",
    src: redCoffinNails,
    alt: "Red nails",
    title: "Red Nails",
    category: "Red, Classic",
  },
  {
    id: "9",
    src: pinkNails,
    alt: "Pink nails",
    title: "Pink Nails",
    category: "Pink, Classic",
  },
];
