// import React from 'react';

import { FaTrashAlt, FaUsers } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import handledDelete from "../../../../shared/ItemDelete/ItemDelete";
import Swal from "sweetalert2";
import "./UserTable.css";

const UserTable = ({ userInfo }) => {
  const [users, refetch] = userInfo;
  // isLoading
  // console.log(users);

  const updateRole = (id, roleType) => {
    fetch(`https://bistro-boss-dark-server.vercel.app/users/admin/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ role: roleType }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
        }
      });
  };

  const handledRoleUpdate = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-primary",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You can change this user role!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Make Admin",
        cancelButtonText: "Make User",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          updateRole(id, "admin");
          swalWithBootstrapButtons.fire(
            "Role Updated!",
            "Change user-role to Admin",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          updateRole(id, "user");
          swalWithBootstrapButtons.fire(
            "Role Updated",
            "Change user-role to User",
            "success"
          );
        }
      });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead className="text-white font-semibold text-xl">
          <tr className="py-6">
            <th></th>
            <th className="uppercase">Name</th>
            <th className="uppercase">Email</th>
            <th className="uppercase">Role</th>
            <th className="uppercase text-center">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th>
                <label>{index + 1}</label>
              </th>

              <td>
                <p className="text-xl">{user.name}</p>
              </td>
              <td>
                <p className="text-xl">{user.email} </p>
              </td>

              <td>
                <button
                  onClick={() => handledRoleUpdate(user._id)}
                  className=" mx-auto hover:animate-pulse bg-transparent p-0 border-none rounded"
                >
                  {user.role === "user" ? (
                    <FaUsers
                      title="User"
                      className="text-4xl text-[#cacaca]"
                    ></FaUsers>
                  ) : (
                    <MdAdminPanelSettings
                      title="Admin"
                      className="text-4xl text-green-500"
                    ></MdAdminPanelSettings>
                  )}
                </button>
              </td>
              <td>
                <button
                  onClick={() =>
                    handledDelete(
                      `https://bistro-boss-dark-server.vercel.app/users/admin/${user._id}`,
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
        {/* foot */}
      </table>
    </div>
  );
};

export default UserTable;
