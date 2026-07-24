import { faqItems } from "./information.data";

export function FaqSection() {
  return (
    <section className="mt-16 sm:mt-20 lg:mt-24" aria-labelledby="faq-title">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-warm-saffron)]">
          FAQ
        </p>
        <h2
          id="faq-title"
          className="mt-4 font-[var(--font-cormorant),serif] text-4xl font-semibold leading-tight text-[var(--color-temple-name)] sm:text-5xl"
        >
          Common Questions
        </h2>
      </div>

      <div className="mx-auto mt-10 max-w-4xl divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
        {faqItems.map((item) => (
          <article className="py-6" key={item.question}>
            <h3 className="font-[var(--font-cormorant),serif] text-2xl font-semibold text-[var(--color-temple-name)]">
              {item.question}
            </h3>
            <p className="mt-2 text-sm leading-7 text-[var(--color-secondary-text)] sm:text-base">
              {item.answer}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
