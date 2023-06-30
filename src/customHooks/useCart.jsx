import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useCart = () => {
  const { user } = useAuth();
  const {
    data: cart = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const token = localStorage.getItem("access-token");
      const res = await fetch(
        `https://bistro-boss-dark-server.vercel.app/carts?email=${
          user?.email && user.email
        }`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });
  return [cart, refetch, isLoading];
};

export default useCart;
