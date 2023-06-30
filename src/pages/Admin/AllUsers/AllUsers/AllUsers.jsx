// import React from 'react';

import Title from "../../../../shared/Title/Title";
import UserTable from "../UserTable/UserTable";
import { useQuery } from "@tanstack/react-query";

const AllUsers = () => {
  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const token = localStorage.getItem("access-token");
      const res = await fetch(
        "https://bistro-boss-dark-server.vercel.app/users/admin",
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });

  const userInfo = [users, refetch, isLoading];
  // console.log(users);
  return (
    <div className="w-10/12 mx-auto">
      <div>
        <Title
          title={"---How many??---"}
          subTitle={"MANAGE ALL USERS"}
          opecity={true}
          subTitleColor={"#fff"}
        ></Title>
      </div>
      <div className="mt-20">
        <div className="p-12 mt-16 bg-white text-black rounded-lg">
          <div className="">
            <h1 className="text-3xl font-bold uppercase">
              Total users:{" "}
              <span className="text-green-500">{users?.length}</span>
            </h1>
          </div>
        </div>
        <div className="mt-8">
          <UserTable userInfo={userInfo}></UserTable>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
