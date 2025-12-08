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
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc",
    quote: "This template saved us weeks of development time. The components are well-designed and easy to customize.",
    image: "https://i.pravatar.cc/150?img=1",
    rating: 5,
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Product Manager",
    company: "Digital Solutions",
    quote: "Clean code, great performance, and excellent documentation. Exactly what we needed for our client projects.",
    image: "https://i.pravatar.cc/150?img=2",
    rating: 5,
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Developer",
    company: "Creative Agency",
    quote: "The component system is fantastic. We've used it for multiple projects and it's been rock solid every time.",
    image: "https://i.pravatar.cc/150?img=3",
    rating: 5,
  },
  {
    id: "4",
    name: "David Park",
    role: "Freelance Designer",
    quote: "Beautiful design out of the box. The dark/light theme support is seamless and the cards look amazing.",
    image: "https://i.pravatar.cc/150?img=4",
    rating: 4,
  },
  {
    id: "5",
    name: "Lisa Thompson",
    role: "Marketing Director",
    company: "Growth Co",
    quote: "Our conversion rates improved significantly after switching to this template. Fast load times make a difference!",
    image: "https://i.pravatar.cc/150?img=5",
    rating: 5,
  },
  {
    id: "6",
    name: "James Wilson",
    role: "Startup Founder",
    quote: "Got our landing page up in a day. The reusable components and data-driven approach is brilliant.",
    image: "https://i.pravatar.cc/150?img=6",
    rating: 5,
  },
];
