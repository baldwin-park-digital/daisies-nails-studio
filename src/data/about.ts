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
  title: "About Daisies Nail Studio",
  subtitle: "Where sophistication meets artistry",
  description:
    "Welcome to Daisies Nail Studio, Los Angeles' premier destination for sophisticated nail care. Our elegant, airy studio offers a tranquil escape where artistry and pampering converge. With a team of talented nail technicians and a commitment to using only the finest products, we create beautiful, long-lasting results in an atmosphere of refined luxury. Each visit is a personalized experience designed to leave you feeling polished and refreshed.",
  image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=600&fit=crop",
  stats: [
    { label: "Years of Excellence", value: "8+" },
    { label: "Happy Clients", value: "2000+" },
    { label: "5-Star Reviews", value: "500+" },
    { label: "Expert Technicians", value: "6" },
  ],
  values: [
    {
      title: "Artistry & Precision",
      description:
        "Our talented technicians are true artists, bringing creativity and meticulous attention to detail to every service.",
    },
    {
      title: "Premium Products",
      description:
        "We use only the highest quality polishes, gels, and treatments that are both beautiful and gentle on your nails.",
    },
    {
      title: "Relaxing Atmosphere",
      description:
        "Step into our elegant, airy studio designed to be your peaceful retreat from the bustle of Los Angeles.",
    },
  ],
};
