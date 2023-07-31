import React, { useEffect } from "react";
import ExcelJS from "exceljs";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleUserThunk } from "../../redux/users/users.action";

function ExportToExcel() {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.users.authUser);
  const user = useSelector((state) => state.users.singleUser);
  const workbook = new ExcelJS.Workbook();
  workbook.creator = user.firstName + " " + user.lastName;
  workbook.lastModifiedBy = user.firstName + " " + user.lastName;
  workbook.created = new Date();
  workbook.modified = new Date();
  workbook.lastPrinted = new Date();
  workbook.properties.date1904 = true;
  workbook.calcProperties.fullCalcOnLoad = true;
  workbook.views = [
    {
      x: 0,
      y: 0,
      width: 10000,
      height: 20000,
      firstSheet: 0,
      activeTab: 1,
      visibility: "visible",
    },
  ];

  const sheet = workbook.addWorksheet("My Sheet");
  const worksheet = workbook.getWorksheet("My Sheet");

  useEffect(() => {
    dispatch(fetchSingleUserThunk(authUser.id));
  }, [dispatch, authUser]);
  return <div></div>;
}

export default ExportToExcel;
