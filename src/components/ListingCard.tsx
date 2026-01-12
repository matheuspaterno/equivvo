import Image from "next/image";
import Link from "next/link";

import type { HorseListing } from "@/data/mockListings";

type Props = {
  listing: HorseListing;
};

export default function ListingCard({ listing }: Props) {
  return (
    <Link
      href={`/listings/${listing.id}`}
      className="group block overflow-hidden rounded-xl border border-border bg-surface transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-28px_var(--eq-shadow)]"
    >
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={listing.imageUrl}
          alt={listing.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="space-y-1 p-4">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-serif text-lg tracking-tight">{listing.name}</h3>
          <div className="text-sm font-medium text-foreground/80">
            ${listing.price.toLocaleString()}
          </div>
        </div>
        <div className="text-sm text-muted">
          {listing.breed} • {listing.location}
        </div>
      </div>
    </Link>
  );
}
