import { Link } from "react-router-dom";
import MainBtn from "../MainBtn/MainBtn";

const Card = ({ menu }) => {
  // const { user } = useAuth();
  // const navigate = useNavigate();
  // const location = useLocation();

  // const handledCart = () => {
  //   // TODO
  //   if (user) {
  //     const orderItem = {
  //       foodItem: menu,
  //       email: user.email,
  //     };
  //     fetch("https://bistro-boss-dark-server.vercel.app/carts", {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(orderItem),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.insertedId) {
  //           // refetch();

  //           ToastMsgSuc(`'${menu.name}' add to your cart!`);
  //         }
  //       });
  //   } else {
  //     Swal.fire({
  //       title: "Login now?",
  //       text: "You have to login to order!",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Login",
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         navigate("/login", { state: { from: location.pathname } });
  //       }
  //     });
  //   }
  // };
  return (
    <div className="border border-gray-200 min-h-[450px] rounded-lg shadow">
      <div className=" bg-transparent ">
        <a href="#">
          <img
            className="rounded-t-lg rounded-b-none w-full"
            src={menu.image}
            alt=""
          />
        </a>
        <div className="p-5 text-center">
          <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {menu.name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {menu.recipe}
          </p>
          <Link
          // onClick={handledCart}
          >
            <MainBtn
              text={"add to cart"}
              textColor={"text-yellow-400"}
              border={"border-yellow-400"}
              textBase={true}
              lessPadding={true}
            ></MainBtn>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
