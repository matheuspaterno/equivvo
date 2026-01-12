import Link from "next/link";

export default function NotFound() {
  return (
    <section className="space-y-3">
      <h1 className="text-3xl font-semibold tracking-tight">Not found</h1>
      <p className="text-black/70">That page doesn’t exist.</p>
      <Link href="/" className="text-sm hover:underline">
        Go home
      </Link>
    </section>
  );
}
