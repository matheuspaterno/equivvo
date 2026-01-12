import ListingSection from "@/components/ListingSection";
import HeroLogo from "@/components/HeroLogo";

export default function Home() {
  return (
    <div className="-mt-6 sm:-mt-10">
      <section className="flex min-h-[calc(100svh-84px)] flex-col items-center justify-center px-4 pt-4 text-center sm:min-h-[calc(100svh-96px)] sm:pt-6">
        <div className="mx-auto max-w-2xl space-y-6">
          <div className="mx-auto flex items-center justify-center">
            <HeroLogo
              src="/equivvologoplusname.png"
              alt="Equivvo"
              className="relative mx-auto h-[clamp(154px,19.6vw,364px)] w-full max-w-[1260px]"
              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 80vw, 1260px"
              fadeRangePx={260}
            />
          </div>

          <div className="space-y-3">
            
            <p className="text-base text-muted sm:text-lg">
              O mercado equino moderno
            </p>
          </div>

          <div className="pt-2">
            <a
              href="#listings"
              className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground/80 hover:text-foreground"
            >
              Explorar cavalos ↓
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4">
        <div className="my-6 h-px w-full bg-border sm:my-12" />
        <ListingSection id="listings" />
      </div>
    </div>
  );
}
