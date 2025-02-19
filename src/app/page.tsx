import React from "react";
import Faq from "../components/faq";
import Features from "../components/features";
import Partners from "../components/partners";
import Hero from '../components/hero'
import Testimonials from "../components/testimonials";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-black">

      <section id="Hero"><Hero /></section>
      <section id="Partner"><Partners /></section>
      <section id="Features"><Features/></section>
      <section id="Testimonials"><Testimonials /></section>
      <section id="Faq"><Faq /></section>
    </div>
  );
}
