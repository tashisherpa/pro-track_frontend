import React from "react";

function UserCard({user}) {
    const img_link = "https://i.pinimg.com/564x/b2/45/2b/b2452bd4499ed406e6f0dfc14138f182.jpg";
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg mt-8 mr-8">
      <img
        className="w-full object-fill"
        src={img_link}
        alt="user_img"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-lg text-center mb-2">{user.firstName} {user.lastName}</div>
      </div>
    </div>
  );
}

export default UserCard;
