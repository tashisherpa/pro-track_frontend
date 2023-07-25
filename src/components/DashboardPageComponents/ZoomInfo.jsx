import React, { useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { fetchZoomMeetingLinkThunk } from "../../redux/zoom/zoom.action";
import { Link } from "react-router-dom";

function ZoomInfo() {
  const [showModal, setShowModal] = useState(false);
  const zoomMeetingLink = useSelector((state) => state.zoom.zoomMeetingLink);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchZoomMeetingLink = () => {
      return dispatch(fetchZoomMeetingLinkThunk());
    };
    fetchZoomMeetingLink();
  }, [dispatch]);

  return (
    <>
      <div className="flex justify-end">
        <button
          className="bg-blue-500 text-white hover:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Zoom Link
        </button>
        <Link to={`/dashboard/zoomlink`}>
        <button
          className="bg-blue-500 text-white hover:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
        >
          Edit Zoom Link
        </button>
        </Link>
      </div>

      <br />
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-2/4 my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Zoom Link</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p>
                    Join By{" "}
                    <a
                      className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full"
                      href={zoomMeetingLink.link}
                      target="blank"
                    >
                      Zoom Meeting Link
                    </a>
                  </p>
                  <br />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default ZoomInfo;
