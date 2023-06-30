import { useQuery } from "@tanstack/react-query";

const useCategory = () => {
  const {
    data: cart = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await fetch(
        "https://bistro-boss-dark-server.vercel.app/menu"
      );
      return res.json();
    },
  });
  return [cart, refetch, isLoading];
};

export default useCategory;
