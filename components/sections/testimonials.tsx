import { Star } from "lucide-react";

const quotes = [
  {
    q: "The platform is easy to use and makes processing warranty tickets smooth and efficient. It's been a huge time-saver for our team, especially with the automated email notifications that keep our customers informed throughout the process. We've encountered a few technical difficulties along the way, but their support team has always been quick, responsive, and effective in resolving any issues. Overall, Dyrect has been a valuable tool in helping us streamline our warranty operations and improve customer satisfaction.",
    brand: "Diggs",
    region: "United States",
  },
  {
    q: "This is exactly what we were looking for in terms of having a professional platform for a good price for customers to claim their warranty. It's really easy to set up, great to keep track of all customers on the backend, and no extra work is necessary for automated emails to go out once a customer registers their warranty. Really appreciate the Dyrect team setting up time with us to help with all the questions we had.",
    brand: "Unico",
    region: "United States",
  },
  {
    q: "We were looking for a technically strong warranty claims management software solution, and Dyrect certainly stood up to our requirements. It eased consumer interactions and automated the warranty claims process.",
    brand: "Flo Mattress",
    region: "India",
  },
];

export function Testimonials() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center max-w-[820px] mx-auto mb-12">
          <p className="eyebrow">Testimonials</p>
          <h2 className="section-title mt-3">
            Real results from brands running on Dyrect
          </h2>
        </div>
        <div
          className="testimonial-grid grid gap-5"
          style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
        >
          {quotes.map((t, i) => (
            <figure
              key={i}
              className="m-0 bg-[var(--slate-50)] border border-[var(--slate-200)] rounded-2xl p-7 flex flex-col gap-4"
            >
              <div className="flex items-center gap-1 text-[#F59E0B]">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <blockquote className="m-0 font-sans text-[14.5px] leading-relaxed text-[var(--slate-800)] font-normal flex-1">
                &ldquo;{t.q}&rdquo;
              </blockquote>
              <figcaption className="pt-4 border-t border-[var(--slate-200)]">
                <div className="text-xs font-semibold text-[var(--slate-900)] uppercase tracking-wider">
                  {t.brand}
                </div>
                <div className="text-xs text-[var(--slate-500)] mt-1">
                  {t.region}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
