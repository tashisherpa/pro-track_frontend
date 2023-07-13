import React from "react";

function ZoomInfo() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-blue-500 text-white hover:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Zoom Link
      </button>
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
                  <p>Join By    <a className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full" href="https://us06web.zoom.us/j/3698593234?pwd=TkJNVmlEU20rK3FMdXI3UU9GUEhqdz09" target="blank">
                    Zoom Meeting Link
                  </a>
                  </p><br/>
                  <p>
                    <span className="font-bold">Meeting ID:</span> 369 859 3234 <br/>
                    <span className="font-bold">Passcode:</span> 0WRe1h <br/>
                    --- <br/>
                    One tap mobile<br/>
                    +16465588656,,3698593234#,,,,322923# US (New York)<br/>
                    +16469313860,,3698593234#,,,,322923# US <br/>
                    --- <br/>
                    Dial by your location <br/>
                    • +1 646 558 8656 US (New York) <br/>
                    • +1 646 931 3860
                    US <br/>
                    • +1 309 205 3325 US <br/>
                    • +1 312 626 6799 US (Chicago) <br/>
                    • +1 301 715 8592 US (Washington DC) <br/>
                    • +1 305 224 1968 US <br/>
                    • +1 507 473 4847 US <br/>
                    • +1 564 217 2000 US <br/>
                    • +1 669 444 9171 US <br/>
                    • +1 689 278 1000 US <br/>
                    • +1 719 359 4580 US <br/>
                    • +1 720 707 2699 US
                    (Denver) <br/>
                    • +1 253 205 0468 US <br/>
                    • +1 253 215 8782 US (Tacoma)<br/>
                    • +1 346 248 7799 US (Houston)<br/>
                    • +1 360 209 5623 US <br/>
                    • +1 386347 5053 US <br/>
                    <br/>
                    Meeting ID: 369 859 3234 <br/>
                    Passcode: 322923 <br/>
                    Find
                    your local number: <a className="text-blue-500" href="https://us06web.zoom.us/u/kbqvOWyvJY">
                      https://us06web.zoom.us/u/kbqvOWyvJY
                    </a>
                  </p>
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
