import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAuthUserThunk, fetchSingleUserThunk, editUserThunk} from "../../redux/users/users.action";

function ProfileCard() {
  const user = useSelector((state) => state.users.authUser);
  const userInfo = useSelector((state) => state.users.singleUser);
  const [profileForm, setProfileForm] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const img_link =
    "https://i.pinimg.com/564x/b2/45/2b/b2452bd4499ed406e6f0dfc14138f182.jpg";

  useEffect(() => {
    const fetchAuthUser = () => {
      return dispatch(fetchAuthUserThunk());
    };
    fetchAuthUser();
  }, [dispatch]);

  useEffect(() => {
    const fetchSingleUser = () => {
      return dispatch(fetchSingleUserThunk(user.id));
    };
    fetchSingleUser();
  }, [dispatch, user]);

  console.log("user: ", user);

  useEffect(() => {
    setProfileForm(userInfo);
  }, [userInfo]);

  //change the value of the editForm, this is also used to handle the text field changes
  const handleInputChange = (event) => {
    setProfileForm({
      ...profileForm,
      [event.target.name]: event.target.value,
    });
    //console.log("editForm: ", editForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log("RUNNING DISPATCH FROM EDITUSERTHUNK");

    dispatch(editUserThunk(profileForm)).then(() => {
      navigate(`/profile`);
    });
  };

  return (
    <div className="max-w-3xl rounded-lg overflow-hidden shadow-xl">
      <div className="px-6 py-4">
        <div className="flex items-center space-x-4">
          <img
            className="w-24 h-24 rounded-full"
            src={img_link}
            alt="Rounded avatar"
          />
          <div className="font-medium text-black">
            <div className="font-bold text-2xl mb-2">
              {userInfo.firstName} {userInfo.lastName}
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <form onSubmit={handleSubmit}>
        <label
          className="block text-gray-700 text-sm font-bold mb-2 mt-2"
          for="firstName"
        >
          First Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="firstName"
          type="text"
          name="firstName"
          value={profileForm.firstName || ""}
          placeholder="First Name"
          onChange={handleInputChange}
        />
        <label
          className="block text-gray-700 text-sm font-bold mb-2 mt-2"
          for="lastName"
        >
          Last Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="lastName"
          type="text"
          name="lastName"
          value={profileForm.lastName || ""}
          placeholder="Last Name"
          onChange={handleInputChange}
        />
        <label
          className="block text-gray-700 text-sm font-bold mb-2 mt-2"
          for="email"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="text"
          name="email"
          value={profileForm.email || ""}
          placeholder="Email"
          onChange={handleInputChange}
        />
        <div className="flex items-center justify-center mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Save Changes
          </button>
        </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileCard;
