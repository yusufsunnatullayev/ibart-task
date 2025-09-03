import { getStatistics } from "@/lib/api/statistics";
import { useQuery } from "@tanstack/react-query";

export function useStatistics() {
  return useQuery({
    queryKey: ["stats"],
    queryFn: getStatistics,
    staleTime: 1000 * 60 * 5,
  });
}
