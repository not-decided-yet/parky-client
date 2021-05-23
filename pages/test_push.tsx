import React, { useEffect, useState } from "react";
import initializeNotification from "../utils/fcm";

export default function TestPush() {
  const [token, setToken] = useState<string>("");
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(initializeNotification)
      .then(setToken);
  });

  return (
    <div className="w-full h-full p-6">
      {token ? (
        <button
          className="bg-primary text-white p-4 w-full rounded-xl"
          onClick={() => {
            navigator.clipboard.writeText(token);
          }}
        >
          Copy my Push Token
        </button>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
