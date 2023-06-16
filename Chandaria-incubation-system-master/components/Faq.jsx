import { useState } from "react";

const questionsAndAnswers = [
  {
    question: "How does the idea incubation process work?",
    answer:
    "The idea incubation process at the Chandaria Incubation System begins with applicants submitting their ideas for evaluation. Once selected, participants join the incubation program and receive comprehensive support. Through mentorship, resources, and validation, participants refine their ideas, develop business models, and create prototypes. Finally, the program culminates in graduation, equipping participants with the necessary tools and guidance to successfully launch their ventures into the market."
  },
  {
    question: "What criteria are used to evaluate and select ideas for incubation?",
    answer:
      "Ideas are evaluated by the Chandaria Incubation System based on criteria such as innovation, market potential, feasibility, value proposition, team capabilities, social impact, and sustainability. The focus is on selecting ideas that are unique, have a viable market, are feasible to implement, offer a strong value proposition, have a capable team, create social impact, and have long-term sustainability. The chosen ideas receive support to develop into successful ventures.",
  },
  {
    question: "How long is the typical incubation period??",
    answer:
      "The typical incubation period at the Chandaria Incubation System can vary depending on the specific program and the needs of the participants. However, it often ranges from several months to a year or more. The duration allows participants to progress through various stages of idea refinement, business development, and skill-building. The goal is to provide adequate time and support for participants to develop their ideas into viable and sustainable ventures.",
  },
  {
    question: "Are there any specific industry sectors or areas of focus for the incubation program?",
    answer:
      "The Chandaria Incubation System aims to support entrepreneurs and innovators across various industry sectors. Their incubation program does not have specific restrictions or exclusions based on industry sectors, allowing individuals with diverse ideas and ventures from any sector to participate. The program welcomes a wide range of sectors, including technology, social impact, healthcare, finance, sustainability, and more. This inclusive approach enables the Chandaria Incubation System to foster innovation and entrepreneurship across a broad spectrum of industries, supporting participants from different sectors in realizing their entrepreneurial ambitions.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2
        className="text-3xl font-bold text-green-600 mb-4"
        data-aos="fade-right"
      >
        Frequently Asked Questions
      </h2>
      <br />
      <p data-aos="fade-right">
      Welcome to our FAQs page, your go-to resource for answers to commonly asked questions about our Idea Incubation System. This page is designed to provide you with clear and concise information 
      about our platform and its features, helping you navigate through the incubation process with ease.
      </p>
      <br />
      <ul className="divide-y divide-slate-500">
        {questionsAndAnswers.map((item, index) => (
          <li
            key={index}
            className="py-4 mb-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span
              className="w-full flex justify-between items-center text-left text-lg text-green-900 focus:outline-none cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <span>{item.question}</span>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </span>
            <div
              className={`mt-4 ${activeIndex === index ? "block" : "hidden"}`}
            >
              <p className="">{item.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
