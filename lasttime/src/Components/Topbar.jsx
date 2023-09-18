import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Stories from "./Story";
const Topbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 3) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="story" className={`${scrolled ? "attachedBG" : ""}`}>
      {/* <Logo /> */}
      <Stories />
    </div>
  );
};

export default Topbar;
