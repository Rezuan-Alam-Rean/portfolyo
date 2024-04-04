"use client";
import Hero from "@/components/ui/Hero/Hero";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const [about, setAbout] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
      const data = await response.json();
      
      // Save the "about" field data
      setAbout(data.user.about);
    };

    fetchData();
  }, []);

  console.log(about);



  return (
    <div>
      <Hero about={about} ></Hero>
    </div>
  );
}
