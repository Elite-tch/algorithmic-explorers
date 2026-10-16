"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles globally

export default function AosInit() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Global animation duration in ms
      once: false, // animations happen only once while scrolling down
    });
  }, []);

  return null; // renders no visible UI
}
