import ContactCard from "@/components/cards/ContactCard";
import { contactInfo } from "@/data/contact";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="max-w-3xl">

          <span className="text-sm font-semibold uppercase tracking-[0.30em] text-blue-600">
            Get In Touch
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl text-slate-900">
            Let's build something great together.
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            I'm currently open to Backend Engineer opportunities,
            freelance projects and exciting collaborations.
            Feel free to reach out anytime.
          </p>

          <a
            href="mailto:hireme.chanderprakash@gmail.com"
            className="
              mt-8

              inline-flex
              items-center
              justify-center

              rounded-full

              bg-blue-600

              px-6
              py-3.5

              text-sm
              font-medium
              text-white

              transition-all
              duration-300

              hover:-translate-y-1
              hover:shadow-xl

              sm:px-8
              sm:py-4
              sm:text-base
            "
          >
            Email Me
          </a>

        </div>

        <div className="mt-14 grid gap-4 sm:mt-16 sm:gap-5 lg:mt-20 lg:gap-6 md:grid-cols-2">
          {contactInfo.map((item) => (
            <ContactCard
              key={item.title}
              {...item}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
