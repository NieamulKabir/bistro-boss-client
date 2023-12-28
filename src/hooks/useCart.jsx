import { useQuery } from "@tanstack/react-query";

import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const { user } = useAuth()
  const token = localStorage.getItem("access-token");
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:5000/carts?email=${user.email}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      return response.json();
      // const res = await useAxiosSecure.get(`/carts?email=${user.email}`);
      // return res.data.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
