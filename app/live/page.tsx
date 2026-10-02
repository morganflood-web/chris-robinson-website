import { getShows } from "@/lib/data";
import LivePageClient from "../_components/LivePageClient";

export const dynamic = "force-dynamic";

export default async function LivePage() {
  const shows = await getShows();
  return <LivePageClient shows={shows} />;
}
