export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: "1",
    question: "Do I need an appointment?",
    answer: "While we welcome walk-ins based on availability, we highly recommend booking an appointment to ensure your preferred time and technician. You can call us at (323) 957-9879 to schedule.",
  },
  {
    id: "2",
    question: "How long do gel manicures last?",
    answer: "Our gel manicures typically last 2-3 weeks without chipping. The longevity depends on your nail care habits and daily activities, but we use premium gel products that ensure long-lasting, beautiful results.",
  },
  {
    id: "3",
    question: "What's the difference between gel and regular polish?",
    answer: "Regular polish air-dries and typically lasts 5-7 days, while gel polish is cured under UV/LED light and lasts 2-3 weeks. Gel provides a high-shine, chip-resistant finish but requires professional removal. We offer both options to suit your needs.",
  },
  {
    id: "4",
    question: "How much does nail art cost?",
    answer: "Custom nail art starts at $10 per nail and varies based on the complexity of the design. Simple designs like dots or stripes are on the lower end, while intricate hand-painted art or 3D embellishments cost more. We'll provide a quote before we begin.",
  },
  {
    id: "5",
    question: "Are your products safe and cruelty-free?",
    answer: "Yes! We prioritize your health and use high-quality, non-toxic polishes and products. Many of our polishes are 5-free or better, meaning they're free from harmful chemicals. We also carry several vegan and cruelty-free product lines.",
  },
  {
    id: "6",
    question: "What should I do to care for my nails between visits?",
    answer: "Keep your nails moisturized with cuticle oil daily, wear gloves when doing housework or dishes, and avoid using your nails as tools. For gel manicures, don't pick at the polish if it starts to lift—come see us for safe removal to prevent nail damage.",
  },
];
