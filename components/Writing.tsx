import { posts } from "@/lib/data";
import Reveal from "./Reveal";

export default function Writing() {
  return (
    <section id="writing" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <Reveal>
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-cobalt">
          05 — Notes from the lab
        </p>
        <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
          Writing
        </h2>
      </Reveal>

      <div className="mt-10 flex flex-col">
        {posts.map((post, i) => (
          <Reveal key={post.title} delay={i * 0.05} from="left">
            <article className="group flex items-baseline justify-between gap-6 border-t border-line py-6 transition-colors duration-200 last:border-b hover:bg-card md:px-4">
              <div className="flex items-baseline gap-5">
                <span className="font-mono text-xs font-semibold text-cobalt">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-semibold transition-colors duration-200 group-hover:text-cobalt md:text-xl">
                  {post.title}
                </h3>
              </div>
              <div className="hidden shrink-0 items-center gap-3 font-mono text-xs text-soft sm:flex">
                <span className="rounded-md border border-line px-2.5 py-1">
                  {post.tag}
                </span>
                <span>{post.date}</span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
