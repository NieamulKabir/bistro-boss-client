import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { MdDelete } from "react-icons/md";

const MyCart = () => {
  const [cart] = useCart();
  console.log(cart);

  const total = cart.reduce((sum, item) => item.price + sum, 0);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | MyCart</title>
      </Helmet>
      <div className="uppercase font-semibold flex justify-evenly items-center h-[60px] space-x-10 mt-10">
        <h3 className="text-3xl bg-[#f0c688] px-3 py-1 rounded-lg"> Total Items: {cart.length}</h3>
        <h3 className="text-3xl bg-[#f0c688] px-3 py-1 rounded-lg"> Total Price: ${total}</h3>
        <button className="btn btn-sm btn-warning">PAY</button>
      </div>
      {/* table  */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Item Name</th>
              <th className="text-end">Price</th>
              <th className="text-end">Action</th>
            </tr>
          </thead>

          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item?.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>
                {item?.name}
                </td>
                <td className="text-end">${item.price}</td>
                <td className="text-end">
                  <button className="btn btn-ghost btn-lg "><MdDelete /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;