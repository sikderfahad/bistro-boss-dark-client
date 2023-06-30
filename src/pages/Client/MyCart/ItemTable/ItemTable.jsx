import "./ItemTable.css";
import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../../customHooks/useCart";
import handledDelete from "../../../../shared/ItemDelete/ItemDelete";

const ItemTable = () => {
  const [cart, refetch] = useCart();
  // console.log(cart);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-white font-semibold text-xl">
            <tr className="py-6">
              <th></th>
              <th className="uppercase">ITEM VIEW</th>
              <th className="uppercase">ITEM NAME</th>
              <th className="uppercase">PRICE</th>
              <th className="uppercase text-center">ACTION</th>
            </tr>
          </thead>
          {!cart.error && (
            <tbody>
              {cart?.map((item, index) => (
                <tr key={index}>
                  <th>
                    <label>{index + 1}</label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-20 h-20">
                          <img
                            src={item.foodItem.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="text-xl">{item.foodItem.name}</p>
                  </td>
                  <td>
                    <p className="text-xl">${item.foodItem.price} </p>
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        handledDelete(
                          `https://bistro-boss-dark-server.vercel.app/carts/${item._id}`,
                          refetch
                        )
                      }
                      className=" mx-auto hover:animate-pulse bg-red-600 p-4 flex items-center border-none  rounded"
                    >
                      <FaTrashAlt className="text-xl text-white"></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default ItemTable;
