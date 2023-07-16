import React from "react";

const UserDetails = ({ params }: any) => {
  return (
    <h1 className="text-3xl mt-14 text-center font-bold">
      User Details - {params.id}
    </h1>
  );
};

export default UserDetails;
