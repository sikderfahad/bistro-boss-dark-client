import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useIsAdmin = () => {
  const { user } = useAuth();

  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["data", user?.email],
    queryFn: async () => {
      const token = localStorage.getItem("access-token");
      const res = await fetch(
        `https://bistro-boss-dark-server.vercel.app/users/admin/${user?.email}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });
  // console.log(isAdmin);
  return [isAdmin, isAdminLoading];
};

export default useIsAdmin;
