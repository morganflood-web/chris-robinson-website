import { getShows } from "@/lib/data";
import HomePageClient from "./_components/HomePageClient";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const shows = await getShows();
  return <HomePageClient shows={shows} />;
}
