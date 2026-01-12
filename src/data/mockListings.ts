export type HorseListing = {
  id: string;
  name: string;
  breed: string;
  age: number;
  price: number;
  location: string;
  description: string;
  imageUrl: string;
};

export const mockListings: HorseListing[] = [
  {
    id: "aurora",
    name: "Aurora",
    breed: "Thoroughbred",
    age: 6,
    price: 12500,
    location: "Lexington, KY",
    description:
      "Forward, athletic mare with a calm brain. Great prospect for eventing or hunters.",
    imageUrl: "/horse-placeholder.svg",
  },
  {
    id: "cedar",
    name: "Cedar",
    breed: "Quarter Horse",
    age: 9,
    price: 9800,
    location: "Fort Worth, TX",
    description:
      "Solid, sensible gelding. Comfortable gaits and an easy keeper—ideal for trails and ranch work.",
    imageUrl: "/horse-placeholder.svg",
  },
  {
    id: "luna",
    name: "Luna",
    breed: "Warmblood",
    age: 7,
    price: 24500,
    location: "Ocala, FL",
    description:
      "Elegant mover with scope. Showing lower levels and ready to develop with a consistent rider.",
    imageUrl: "/horse-placeholder.svg",
  },
];
