"use client";
import React from "react";
import { Typography, Collapse } from "antd";
import CommonLayout from "../layouts/common-layout";

const { Title } = Typography;
const { Panel } = Collapse;

interface FAQItem {
  question: string;
  answer: string;
}

const FAQPage: React.FC = () => {
  const faqItems: FAQItem[] = [
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for most items. The item must be unused and in the same condition that you received it. It must also be in the original packaging.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping times vary depending on your location and the shipping method chosen. Typically, domestic orders are delivered within 3-5 business days, while international orders may take 7-14 business days.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to many countries worldwide. Shipping costs and delivery times may vary depending on the destination.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order has been shipped, you will receive a shipping confirmation email with a tracking number. You can use this number to track your package on our website or the carrier's website.",
    },
    {
      question: "Are your products covered by a warranty?",
      answer:
        "Most of our products come with a manufacturer's warranty. The duration and coverage of the warranty may vary by product. Please check the product description for specific warranty information.",
    },
  ];

  return (
    <CommonLayout>
      <Title level={2}>Frequently Asked Questions</Title>
      <Collapse accordion>
        {faqItems.map((item, index) => (
          <Panel header={item.question} key={index}>
            <p>{item.answer}</p>
          </Panel>
        ))}
      </Collapse>
    </CommonLayout>
  );
};

export default FAQPage;
