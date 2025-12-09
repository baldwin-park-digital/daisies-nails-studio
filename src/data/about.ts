export interface AboutContent {
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  stats?: {
    label: string;
    value: string;
  }[];
  values?: {
    icon?: string;
    title: string;
    description: string;
  }[];
}

export const aboutContent: AboutContent = {
  title: "About Us",
  subtitle: "Nail Haven on Melrose",
  description:
  "At Daisies Nail Studio, we know booking a nail appointment is about trust, comfort, and confidence. That’s why we’ve built a studio that blends artistry with care. Our licensed technicians bring years of experience in both classic manicures and bold nail art, using only top-quality products in a spotless, welcoming environment. Whether you’re looking for a quick refresh or a statement design, we make sure every detail is perfect. With easy online booking and a reputation for flawless results, we’re here to give you nails you’ll love showing off.",
  image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
  stats: [
    { label: "Appointments Booked", value: "2,000+" },
    { label: "Happy Clients", value: "1,000+" },
    { label: "Years of Combined Experience", value: "15+" },
    { label: "Average Rating", value: "4.9/5" },
  ],
  values: [
    {
      title: "Quality First",
      description:
        "We use only premium products and meticulous techniques to ensure your nails look flawless and last longer.",
    },
    {
      title: "Creativity & Style",
      description:
        "We stay ahead of nail trends and bring fresh, artistic designs to life — so your nails are always as unique as you are.",
    },
    {
      title: "Clean & Safe",
      description:
        "We follow strict sanitation standards to guarantee a safe, hygienic environment you can trust every visit.",
    },
  ],
};
