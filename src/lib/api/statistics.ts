import { base_url } from "../base_url";

export async function getStatistics() {
  const res = await fetch(`${base_url}/stats`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch stats");
  return res.json();
}
