import React, {useEffect} from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch} from "react-redux";
import { fetchAuthUserThunk } from "../../redux/users/users.action";
import { Link } from "react-router-dom";

function AddResourceBtn() {
   const user = useSelector((state)=> state.users.authUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAuthUser = () => {
      return dispatch(fetchAuthUserThunk());
    };
    fetchAuthUser();
  }, [dispatch]);

  return (
    <div>
    {
      /*Only visible to TA/Admins */
      user.userType==="admin" || "TA" ? (
        <Link to={`/resources/add`}>
          <div className="flex justify-end mb-10">
            <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Add Resource
            </button>
          </div>
        </Link>
      ) : null
    }
  </div>
  );
}

export default AddResourceBtn;
