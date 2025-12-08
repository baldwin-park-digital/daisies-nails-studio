export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  company?: string;
  quote: string;
  image?: string;
  rating?: number; // 1-5 stars
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Jessica Martinez",
    quote: "The atmosphere at Daisies is so elegant and calming. My gel manicure lasted three weeks and looked perfect the whole time!",
    image: "https://i.pravatar.cc/150?img=1",
    rating: 5,
  },
  {
    id: "2",
    name: "Amanda Chen",
    quote: "Best nail salon in LA! The nail art is absolutely stunning and the staff is incredibly talented. I always leave feeling pampered.",
    image: "https://i.pravatar.cc/150?img=5",
    rating: 5,
  },
  {
    id: "3",
    name: "Sarah Thompson",
    quote: "I've been coming to Daisies for over a year now. The attention to detail is exceptional and they always exceed my expectations.",
    image: "https://i.pravatar.cc/150?img=9",
    rating: 5,
  },
  {
    id: "4",
    name: "Maria Rodriguez",
    quote: "The spa pedicure here is heaven! So relaxing and my feet have never looked better. Worth every penny.",
    image: "https://i.pravatar.cc/150?img=10",
    rating: 5,
  },
  {
    id: "5",
    name: "Emily Park",
    quote: "I came in with a design idea and they brought it to life perfectly. The custom nail art here is next level!",
    image: "https://i.pravatar.cc/150?img=16",
    rating: 5,
  },
  {
    id: "6",
    name: "Rachel Green",
    quote: "Clean, sophisticated, and the service is always top-notch. Daisies has become my go-to for all my nail care needs.",
    image: "https://i.pravatar.cc/150?img=20",
    rating: 5,
  },
];
