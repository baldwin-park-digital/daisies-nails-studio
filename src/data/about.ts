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
  subtitle: "Building exceptional digital experiences",
  description:
    "We're a team of passionate designers and developers dedicated to creating beautiful, functional websites that help small businesses thrive online. With years of experience and a client-first approach, we transform ideas into stunning digital realities.",
  image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
  stats: [
    { label: "Projects Completed", value: "100+" },
    { label: "Happy Clients", value: "50+" },
    { label: "Years Experience", value: "5+" },
    { label: "Team Members", value: "10+" },
  ],
  values: [
    {
      title: "Quality First",
      description:
        "We never compromise on quality. Every project is crafted with attention to detail and built to last.",
    },
    {
      title: "Client-Focused",
      description:
        "Your success is our success. We work closely with you to understand your goals and deliver results.",
    },
    {
      title: "Innovation",
      description:
        "We stay ahead of trends and use cutting-edge technology to give you a competitive advantage.",
    },
  ],
};
