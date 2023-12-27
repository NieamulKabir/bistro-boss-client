import { useQuery } from "@tanstack/react-query";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch(`http://localhost:5000/users`);
      return response.json();
    },
  });

  return (
    <div>
      <h1>{users.length}</h1>
    </div>
  );
};

export default AllUsers;
