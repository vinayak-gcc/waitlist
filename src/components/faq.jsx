import { Mail, Phone, MapPin, Twitter, Facebook, Instagram } from "lucide-react";

export default function FAQSection() {
  return (
    <div className="flex flex-col min-h-screen 2xl:min-h-0 bg-black">
      {/* FAQ Section */}
      <div className="flex-grow flex flex-col items-center justify-center px-4 py-16">
        <div className="w-full max-w-3xl mx-auto space-y-8">
          {/* FAQ Label */}
          <div className="text-center">
            <span className="inline-block animated-border px-6 py-2 text-sm text-white/90 rounded-full bg-white/10 backdrop-blur-sm">
              FAQ
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl space-y-2 font-bold text-center mb-12">
            <span className="text-white">Frequently </span>
            <span className="text-gray-500">Asked</span>
            <br />
            <span className="text-gray-500 mt-2">Questions</span>
          </h2>

          {/* FAQ Accordion */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { question: "What is the Waitlst?", answer: "The Waitlst is a powerful tool for managing and organizing your waiting list efficiently." },
              { question: "How can I customize?", answer: "You can customize various aspects of the Waitlst to match your brand and requirements." },
              { question: "Which platforms can the Waitlst template integrate?", answer: "The Waitlst template can integrate with various platforms and services." },
              { question: "How about updates?", answer: "We regularly provide updates to improve functionality and add new features." },
              { question: "Collecting Information?", answer: "Information collection is secure and compliant with privacy standards." },
              { question: "Is the Waitlst template mobile-friendly?", answer: "Yes, the Waitlst template is fully responsive and mobile-friendly." },
            ].map((item, index) => (
              <details key={index} className={`border-none ${index % 3 === 2 ? 'md:col-span-2' : 'md:col-span-1'}`}>
                <summary className="hover:no-underline bg-zinc-900/50 rounded-xl px-6 py-4 text-white text-left cursor-pointer flex justify-between items-center">
                  {item.question}
                  <span className="w-8 h-8 p-3 flex items-center justify-center rounded-full bg-black border border-white/75 text-white text-xl">+</span>
                </summary>
                <p className="px-6 pt-2 pb-4 text-gray-400">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section - Stays at Bottom */}
      <div className="mt-auto bg-black flex flex-col items-center justify-center px-4 py-10 relative overflow-hidden w-full">
        {/* Background Text */}
        <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center items-center text-[20vw] font-bold text-white/5 leading-none pointer-events-none select-none">
          Contact
        </div>

        <div className="w-full max-w-2xl mx-auto z-10 border border-white/50 rounded-3xl mb-10">
          {/* Logo */}
          <div className="w-20 h-20 bg-zinc-900 rounded-3xl flex items-center justify-center mx-auto mt-16 mb-8 shadow-[0px_0px_34px_rgba(255,255,255,0.5)]">
            <span className="text-4xl font-bold text-white">W</span>
          </div>

          {/* Welcome Text */}
          <p className="text-white/90 text-center text-lg mb-12 max-w-xl mx-auto">
            We'd love to hear from you if you have questions,
            <br />
            need support, or want to learn more.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mb-12">
            {[
              { Icon: Twitter, href: "#twitter" },
              { Icon: Facebook, href: "#facebook" },
              { Icon: Instagram, href: "#instagram" },
            ].map(({ Icon, href }, index) => (
              <a
                key={index}
                href={href}
                className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-zinc-800 transition-colors"
              >
                <Icon className="w-5 h-5 text-white/70" />
              </a>
            ))}
          </div>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center mb-4 scale-90">
            {[
              { icon: <Mail className="w-6 h-6" />, title: "Email us", info: "hi@affanlab.com" },
              { icon: <Phone className="w-6 h-6" />, title: "Call us", info: "(501) 123-4567" },
              { icon: <MapPin className="w-6 h-6" />, title: "Location", info: "Crosby Street, NY, USA" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 flex flex-col items-center text-center hover:bg-zinc-900/50 transition-colors"
              >
                <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-white font-medium mb-2">{item.title}</h3>
                <p className="text-white/60">{item.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
