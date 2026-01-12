export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <section className="space-y-3">
      <h1 className="text-3xl font-semibold tracking-tight">About Equivvo</h1>
      <p className="max-w-2xl text-black/70">
        Equivvo is a bare-bones horse marketplace MVP built with Next.js and
        TypeScript. This scaffold uses mock listings only—no backend, database,
        auth, or payments yet.
      </p>
    </section>
  );
}
