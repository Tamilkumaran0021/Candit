import Group from "../../public/Group2.png";
import Image from "next/image";
import Logo from '../../public/Candit.png';
import html2canvas from "html2canvas";
import { useState } from "react";

export function Renderimage({ userName, Content }) {

    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
      setIsLoading(false); // Hide loading animation
    }, 3000); // Wait for 3 seconds

  // Function to capture and share the image
  const handleShare = async () => {
    const captureDiv = document.getElementById("capture-area"); // Target div

    if (!captureDiv) return;

    try {
      // Capture the div as canvas
      const canvas = await html2canvas(captureDiv, { useCORS: true ,scale: 1});
      const image = canvas.toDataURL("image/png"); // Convert to base64

      // Check if Web Share API is available
      if (navigator.share) {
        const blob = await (await fetch(image)).blob(); // Convert to blob
        const file = new File([blob], "shared-image.png", { type: "image/png" });

        await navigator.share({
          files: [file],
          title: "Check this out!",
          text: "See what awaits you in 2025!",
        });
      } else {
        // Fallback: Download image
        const link = document.createElement("a");
        link.href = image;
        link.download = "shared-image.png";
        link.click();
      }
    } catch (error) {
      console.error("Sharing failed", error);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {/* Capture Area */}
      <div id="capture-area" className="flex flex-col items-center justify-center  z-20   bg-black w-[350px] md:w-[350px]">
        <Image width={2200} height={2200}  src={Group} alt="Mid Image" className="rounded-lg object-cover lg:w-[350px]" />

        <div className="text-white relative -top-16 block bg-gradient-to-br from-yellowBackground to-yellowSecondary p-2 w-[330px] rounded-3xl border-white border-2">
          <h1 className="text-center text-2xl font-myFont  px-10 py-2 bg-lime-900 rounded-full w-full">{userName}</h1>
          <p className="text text-black text-center font-myFont py-8">{Content}</p>
          <p className="text-center text-black font-myFont">Get yours at canditapp.com</p>
        </div>

        <div className="flex flex-col items-center mt-0">
          <Image src={Logo} alt="Logo" width={2200} height={2200}  className=" object-cover w-[100px]" />
          <p>Powered by Friendship</p>
        </div>
      </div>

      {/* Share Button */}
      <div className="flex justify-center mt-1">
        <button
          className="bg-yellowBackground px-20 py-2 text-black rounded-full text-xl font-bold"
          onClick={handleShare}
        >
          Share to friends!
        </button>
      </div>

      {isLoading && (
  <div className="fixed inset-0 flex items-center justify-center bg-black  z-50">
    <div className="flex-col gap-4 w-full flex items-center justify-center ">
      {/* Outer Circle */}
      <div className="w-24 h-24 border-4 border-transparent animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
        
        {/* Second Circle */}
        <div className="w-20 h-20 border-4 border-transparent animate-spin flex items-center justify-center border-t-red-400 rounded-full">
          
          {/* Third Circle */}
          <div className="w-16 h-16 border-4 border-transparent animate-spin flex items-center justify-center border-t-green-400 rounded-full">
            
            {/* Fourth Circle (Innermost) */}
            <div className="w-12 h-12 border-4 border-transparent animate-spin flex items-center justify-center border-t-yellow-400 rounded-full"></div>

          </div>

        </div>

      </div>
    </div>
  </div>
)}
    </div>
  );
}
