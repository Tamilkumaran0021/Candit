"use client"; // Ensures this component runs only on the client side
import { Renderimage } from "@/components/Renderimage";
import { useEffect, useState } from "react";

export default function Page() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedData = localStorage.getItem("message");

    if (storedData) {
      setMessage(JSON.parse(storedData));
 
    }
  }, []); // Runs once when the component mounts

  return (
    <>

        <Renderimage userName={message.UserName} Content={message.Content}/>
    </>
  );
}
