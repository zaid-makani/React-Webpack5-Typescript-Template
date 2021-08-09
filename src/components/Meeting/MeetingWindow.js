import React, { useState, useEffect } from "react";

const MeetingWindow = (props) => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {

    const scriptTag = document.createElement("script");
    scriptTag.src = "https://meet.jit.si/external_api.js";
    scriptTag.addEventListener("load", () => setIsScriptLoaded(true));
    document.body.appendChild(scriptTag);

    const domain = "meet.jit.si";
    const options = {
      roomName: "JitsiMeetAPIExample",
      width: 500,
      height: 500,
      parentNode: document.querySelector("#meet"),
    };

    if (isScriptLoaded) {
      const api = new window.JitsiMeetExternalAPI(domain, options);
    }
  }, [isScriptLoaded]);

  return (
    <div>
      <p>Meeting</p>
      <div id="meet"></div>
    </div>
  );
};

export default MeetingWindow;
