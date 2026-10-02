import { getReleases } from "@/lib/data";
import ReleasesPageClient from "../_components/ReleasesPageClient";

export const dynamic = "force-dynamic";

export default async function ReleasesPage() {
  const releases = await getReleases();
  return <ReleasesPageClient releases={releases} />;
}
