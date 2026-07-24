export function MealVolunteerForm() {
  return (
    <section
      className="mt-16 border border-[color-mix(in_srgb,var(--color-accent-gold)_42%,var(--color-border))] bg-[var(--color-soft-cream)] p-6 shadow-[0_24px_70px_color-mix(in_srgb,var(--color-temple-maroon)_12%,transparent)] sm:mt-20 sm:p-8 lg:mt-24 lg:p-10"
      aria-labelledby="meal-volunteer-title"
    >
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-warm-saffron)]">
            Meal Volunteer Help
          </p>
          <h2
            id="meal-volunteer-title"
            className="mt-4 font-[var(--font-cormorant),serif] text-4xl font-semibold leading-tight text-[var(--color-temple-name)] sm:text-5xl"
          >
            Offer Seva
          </h2>
          <p className="mt-5 text-base leading-8 text-[var(--color-secondary-text)]">
            Share your details to help with meal seva, prasad distribution, or
            devotee support during temple events.
          </p>
        </div>

        <form className="grid gap-5" action="#">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-[var(--color-primary-text)]">
              Full Name
              <input
                className="h-12 border border-[var(--color-border)] bg-[var(--color-warm-ivory)] px-4 text-sm font-medium outline-none transition focus:border-[var(--color-warm-saffron)]"
                name="fullName"
                placeholder="Enter your name"
                type="text"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-[var(--color-primary-text)]">
              Contact Number
              <input
                className="h-12 border border-[var(--color-border)] bg-[var(--color-warm-ivory)] px-4 text-sm font-medium outline-none transition focus:border-[var(--color-warm-saffron)]"
                name="contactNumber"
                placeholder="Enter mobile number"
                type="tel"
              />
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-[var(--color-primary-text)]">
              Email
              <input
                className="h-12 border border-[var(--color-border)] bg-[var(--color-warm-ivory)] px-4 text-sm font-medium outline-none transition focus:border-[var(--color-warm-saffron)]"
                name="email"
                placeholder="Enter email"
                type="email"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-[var(--color-primary-text)]">
              Availability
              <input
                className="h-12 border border-[var(--color-border)] bg-[var(--color-warm-ivory)] px-4 text-sm font-medium outline-none transition focus:border-[var(--color-warm-saffron)]"
                name="availability"
                placeholder="Morning, evening, festival days"
                type="text"
              />
            </label>
          </div>

          <label className="grid gap-2 text-sm font-semibold text-[var(--color-primary-text)]">
            How would you like to help?
            <textarea
              className="min-h-32 resize-y border border-[var(--color-border)] bg-[var(--color-warm-ivory)] px-4 py-3 text-sm font-medium leading-7 outline-none transition focus:border-[var(--color-warm-saffron)]"
              name="message"
              placeholder="Meal preparation, serving, cleaning, coordination, or other seva"
            />
          </label>

          <button
            className="inline-flex h-12 w-fit items-center justify-center bg-[var(--color-temple-maroon)] px-7 text-sm font-bold uppercase tracking-[0.14em] text-[var(--color-white)] transition hover:bg-[var(--color-donate-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-gold)]"
            type="submit"
          >
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}
