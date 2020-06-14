import React from "react";

const AssetLink = () => {
  const AssetLinks = JSON.stringify([
    {
      relation: ["delegate_permission/common.handle_all_urls"],
      target: {
        namespace: "android_app",
        package_name: "app.vercel.roseline124_next_pwa_boilerplate_oq3l.twa",
        sha256_cert_fingerprints: [
          "4F:EC:76:57:24:A8:9E:05:48:47:7D:1A:DD:C0:14:AB:60:6A:5D:69:66:B9:D4:F0:B6:BF:B5:43:41:13:56:A4",
        ],
      },
    },
  ]);
  return <div>{AssetLinks}</div>;
};

export default AssetLink;
