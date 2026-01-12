import ListingCard from "@/components/ListingCard";
import { mockListings } from "@/data/mockListings";

type Props = {
  id?: string;
};

export default function ListingSection({ id }: Props) {
  return (
    <section id={id} className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div className="space-y-1">
          <h2 className="font-serif text-2xl tracking-tight">Available Horses</h2>
          <p className="text-sm text-muted">
            Curated mock listings to shape the Equivvo catalog experience.
          </p>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {mockListings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </section>
  );
}
