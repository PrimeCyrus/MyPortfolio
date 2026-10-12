import { email, profile, socials } from "@/lib/data";

const heading = "mb-4 text-xs uppercase tracking-widest text-neutral-500";
const link = "text-sm transition-colors hover:text-neutral-400";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-neutral-900 bg-black px-6 py-20 text-white md:px-12 dark:border-neutral-800"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="mb-8 font-display text-3xl leading-none tracking-tighter md:text-5xl">
              LET&apos;S BUILD
              <br />
              WHAT&apos;S
              <br />
              NEXT.
            </h2>
            <a
              href={`mailto:${email}`}
              className="inline-block border border-white px-8 py-3 text-sm uppercase tracking-widest transition-colors hover:bg-white hover:text-black"
            >
              Get in touch
            </a>
          </div>

          <div className="md:col-span-3 md:col-start-6">
            <h4 className={heading}>Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href={`mailto:${email}`} className={`${link} break-all`}>
                  {email}
                </a>
              </li>
              <li>
                <a href="#services" className={link}>
                  Services &amp; pricing
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className={heading}>Social</h4>
            <ul className="space-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={link}
                  >
                    {s.label === "Twitter" ? "Twitter / X" : s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className={heading}>Legal</h4>
            <p className="text-sm text-neutral-400">
              © 2026 {profile.company}
            </p>
            <p className="mt-2 text-sm text-neutral-400">All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
