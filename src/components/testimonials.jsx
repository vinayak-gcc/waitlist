export default function TestimonialsGrid() {
  const testimonials = [
    {
      stars: 5,
      quote:
        "As a Marketing Manager, I need to send funds internationally frequently. This app has simplified the process for me. It's fast, reliable, and the rates are unbeatable.",
      author: "Sophia Johnson",
    },
    {
      stars: 5,
      quote:
        "Running a small business, I need a money transfer app that's easy to use and cost-effective. This app ticks all the boxes. It's saved me time and money! The transaction history feature is especially helpful for keeping track of all my finances.",
      author: "Emily Chen",
    },
    {
      stars: 5,
      quote:
        "Being a freelancer, I rely on this app to receive payments from clients worldwide. It's convenient, secure, and the transaction history feature helps me keep track of all my earnings. I appreciate how it simplifies my financial management, allowing me to focus more on my creative work.",
      author: "Alex Ramirez",
    },
    {
      stars: 5,
      quote:
        "I've tried several other transfer apps, but none compare to this one. The user interface is intuitive, and the ability to send money to multiple currencies is a game-changer.",
      author: "David Patel",
    },
  ];

  return (
    <div className="min-h-screen max-w-[48rem] scale-[0.85] mx-auto px-0 bg-black p-4 md:p-8">
      <div className="flex flex-col justify-center items-center text-center">
        {/* Testimonials Label */}
        <div className="inline-block px-6 animated-border -mt-24 py-2 rounded-full bg-zinc-900/80 backdrop-blur-sm  mb-8 relative">
          <span className="text-white/90 text-sm font-medium relative z-10">
            Testimonials
          </span>
          <div className="absolute inset-0 rounded-full bg-zinc-700/20 blur-xl"></div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-white mb-6">
          Testimo<span className="text-zinc-400">nials</span>
        </h2>

        {/* Subtitle */}
        <p className="text-lg  text-zinc-400 max-w-2xl mx-auto mb-16">
          Don’t just take our word for it—see what our <br /> satisfied clients
          have to say about it.
        </p>
      </div>

      <div className="mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={`rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 backdrop-blur-sm border border-zinc-800 ${
                index % 2 === 1 ? "md:mt-12" : ""
              }`}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-white text-lg mb-8">{`"${testimonial.quote}"`}</p>

              <div className="flex items-center justify-between">
                <span className="text-white font-medium">
                  {testimonial.author}
                </span>
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
