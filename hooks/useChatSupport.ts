"use client";

import { useEffect } from "react";

export const useChatSupport = () => {
  useEffect(() => {
    const token = sessionStorage.getItem("token");

    var Tawk_API: any = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0: any = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/6576407470c9f2407f7e1d7e/1hhauni44";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);
};


