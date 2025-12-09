export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  company?: string;
  quote: string;
  image?: { src: string; width: number; height: number };
  rating?: number; // 1-5 stars
}

import limaBImg from '../assets/testimonials/lima-b.jpg';
import nickPImg from '../assets/testimonials/nick-p.jpg';
import sophieTImg from '../assets/testimonials/sophie-t.jpg';

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Lima B.",
    company: "via Yelp",
    quote: "A very pleasant experience! The spa wasn't crowded, and I received queen-level service. They also have a wide selection of colors to choose from. This visit I got chocolate syrup gels, and next time I'll try the glazed donut look. Highly recommend!",
    image: limaBImg,
    rating: 5,
  },
  {
    id: "2",
    name: "Nick P.",
    role: "",
    company: "via Yelp",
    quote: "they always give me exactly what I want without cut up cuticles and thin nails I mean it! I always get a pedi and hard gel mani with Ivy and she is not only the sweetest but always delivers with the designs. My sets always last me a while. All staff are super friendly and efficient. Would highly recommend checking them out. Pricing is very affordable and the shop is super relaxing.",
    image: nickPImg,
    rating: 5,
  },
  {
    id: "3",
    name: "Sophie T.",
    role: "",
    company: "via Google",
    quote: "would never trust anyone else but ivy with my nails! the cleanest, best salon in all of los angeles and im born/raised here. all the nail techs are legit artists and i just can't say enough good things about daises... HIGHLY recco!!",
    image: sophieTImg,
    rating: 5,
  },
];
