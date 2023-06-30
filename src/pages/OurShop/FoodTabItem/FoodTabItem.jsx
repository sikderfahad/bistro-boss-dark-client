import { useEffect } from "react";
import Spinner from "../../../components/Spinner/Spinner";
import useCategory from "../../../customHooks/useCategory";
import MainBtn from "../../../shared/MainBtn/MainBtn";
import AOS from "aos";
import "aos/dist/aos.css";
import useAuth from "../../../customHooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastMsgSuc } from "../../../components/Toast/ToastMsg";
import useCart from "../../../customHooks/useCart";

export const FoodCard = ({ item }) => {
  const { user } = useAuth();
  const [, refetch] = useCart();
  const location = useLocation();
  const from = location.pathname;
  // console.log(from, location);
  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.init();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const saveCart = { foodItem: item, email: user?.email };

  const navigate = useNavigate();
  const handledAddToCart = () => {
    if (!user) {
      Swal.fire({
        title: "Go For Login",
        text: "Must be login for add to cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/user/login", { state: from });
        }
      });
    } else {
      fetch("https://bistro-boss-dark-server.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveCart),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            refetch();
            ToastMsgSuc(`${item.name} successfuly added to your cart`);
          }
        });
    }
  };
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      className="border shadow rounded-lg transform hover:scale-95 duration-200"
    >
      <div className="card">
        <figure className="rounded-t-lg h-[300px]">
          <img src={item.image} alt={item.name} className=" w-full h-full" />
        </figure>
        <div className="card-body flex flex-col gap-5 px-10 items-center text-center">
          <h2 className="text-white card-title">{item.name}</h2>
          <p>{item.recipe}</p>
          <div className="card-actions">
            <span onClick={handledAddToCart}>
              <MainBtn
                text={"add to cart"}
                lessPadding={true}
                textColor={
                  "bg-clip-text text-transparent bg-gradient-to-br from-green-500 to-pink-500"
                }
              ></MainBtn>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const FoodTabItem = ({ type }) => {
  const [cart, , isLoading] = useCategory();
  const foodsCategory = cart.filter((item) => item.category === type);
  return (
    <div>
      {!isLoading ? (
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {foodsCategory.map((item) => (
            <FoodCard key={item._id} item={item}></FoodCard>
          ))}
        </div>
      ) : (
        <Spinner></Spinner>
      )}
    </div>
  );
};

export default FoodTabItem;
