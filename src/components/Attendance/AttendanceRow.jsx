import React from "react";

function AttendanceRow({ userAttendance }) {
  return (
    <tr className="text-gray-700">
      <td className="firtName px-4 py-3 text-ms font-semibold border">
        {userAttendance?.user?.firstName}
      </td>
      <td className="firtName px-4 py-3 text-ms font-semibold border">
        {userAttendance?.user?.lastName}
      </td>
      <td className="M px-4 py-3 text-sm border">{userAttendance.monday}</td>
      <td className="T px-4 py-3 text-sm border">{userAttendance.tuesday}</td>
      <td className="W px-4 py-3 text-sm border">{userAttendance.wednesday}</td>
      <td className="Th px-4 py-3 text-sm border">{userAttendance.thursday}</td>
      <td className="F px-4 py-3 text-sm border">{userAttendance.friday}</td>
      <td className="Sa px-4 py-3 text-sm border">{userAttendance.saturday}</td>
      <td className="Su px-4 py-3 text-sm border">{userAttendance.sunday}</td>
    </tr>
  );
}

export default AttendanceRow;
