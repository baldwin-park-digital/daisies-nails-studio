export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: "1",
    question: "What services do you offer?",
    answer: "We offer a comprehensive range of services including web design, development, branding, and digital marketing. Each service is tailored to meet your specific business needs and goals.",
  },
  {
    id: "2",
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. A simple website typically takes 2-4 weeks, while more complex projects may take 6-12 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    id: "3",
    question: "What is your pricing structure?",
    answer: "Our pricing is project-based and depends on your specific requirements. We offer flexible packages to suit different budgets and needs. Contact us for a free consultation and custom quote.",
  },
  {
    id: "4",
    question: "Do you provide ongoing support?",
    answer: "Yes! We offer maintenance and support packages to keep your website running smoothly. This includes updates, security monitoring, backups, and technical support whenever you need it.",
  },
  {
    id: "5",
    question: "Can you help with SEO and marketing?",
    answer: "Absolutely. We build SEO-friendly websites and offer digital marketing services including content strategy, social media management, and paid advertising campaigns to help grow your online presence.",
  },
  {
    id: "6",
    question: "What makes you different from other agencies?",
    answer: "We focus on building long-term partnerships with our clients. Our personalized approach, transparent communication, and commitment to quality ensure you get a solution that truly works for your business.",
  },
];
