import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaUserShield } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch(`http://localhost:5000/users`);
      return response.json();
    },
  });

  const handleDelete = (user) => {};
  const handleMakeAdmin=()=>{
    
  }

  return (
    <div className="w-full px-4">
      <Helmet>
        <title>Bistro Boss | AllUser</title>
      </Helmet>
      <h1 className="text-3xl font-semibold my-4">
        Total Users: {users.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user?._id}>
                <th>{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  {user?.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user?._id)}
                      className="btn btn-ghost btn-lg "
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>
                <td className="">
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost btn-lg "
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
