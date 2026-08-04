import ContactCard from "@/components/cards/ContactCard";
import { contactInfo } from "@/data/contact";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="max-w-3xl">

          <span className="text-sm font-semibold uppercase tracking-[0.30em] text-blue-600">
            Let's Connect
          </span>

          <h2 className="mt-5 text-5xl font-bold tracking-tight text-slate-900">
            Let's build something great together.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            I'm currently open to Backend Engineer opportunities,
            freelance projects and exciting collaborations.
            Feel free to reach out anytime.
          </p>

          <a
            href="mailto:hireme.chanderprakash@gmail.com"
            className="
            mt-10
            inline-flex
            rounded-full
            bg-blue-600
            px-8
            py-4
            font-medium
            text-white
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
            "
          >
            Email Me
          </a>

        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
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
