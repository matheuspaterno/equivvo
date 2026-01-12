import Link from "next/link";
import { notFound } from "next/navigation";

import { mockListings } from "@/data/mockListings";

export const metadata = {
  title: "Listing",
};

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ListingDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const listing = mockListings.find((h) => h.id === id);

  if (!listing) {
    notFound();
  }

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <div>
          <Link href="/listings" className="text-sm text-black/70 hover:underline">
            ← Back to listings
          </Link>
        </div>

        <div className="space-y-1">
          <h1 className="text-3xl font-semibold tracking-tight">{listing.name}</h1>
          <p className="text-black/70">
            {listing.breed} • Age {listing.age} • {listing.location}
          </p>
        </div>
      </div>

      <div className="rounded-lg border border-black/10 p-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <div className="text-sm text-black/60">Price</div>
            <div className="text-lg font-semibold">
              ${listing.price.toLocaleString()}
            </div>
          </div>
          <div>
            <div className="text-sm text-black/60">Listing ID</div>
            <div className="text-sm font-mono text-black/80">{listing.id}</div>
          </div>
        </div>

        <div className="mt-4">
          <div className="text-sm text-black/60">Description</div>
          <p className="mt-1 text-black/80">{listing.description}</p>
        </div>

        <div className="mt-4">
          <div className="text-sm text-black/60">Image</div>
          <p className="mt-1 text-sm text-black/70">
            Placeholder: <span className="font-mono">{listing.imageUrl}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
