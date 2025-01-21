import Group from "../../public/Group2.png";
import Image from "next/image";
import Logo from '../../public/Candit.png';
import html2canvas from "html2canvas";

export function Renderimage({ userName, Content }) {

  // Function to capture and share the image
  const handleShare = async () => {
    const captureDiv = document.getElementById("capture-area"); // Target div

    if (!captureDiv) return;

    try {
      // Capture the div as canvas
      const canvas = await html2canvas(captureDiv, { useCORS: true });
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
    <>
      {/* Capture Area */}
      <div id="capture-area" className="flex flex-col items-center justify-center w-full z-20 rounded-lg  bg-black">
        <img src={Group} alt="Mid Image" className="rounded-lg object-cover lg:w-[350px]" />

        <div className="text-white relative -top-16 block bg-gradient-to-br from-yellowBackground to-yellowSecondary p-2 w-[330px] rounded-3xl border-white border-2">
          <h1 className="text-center text-2xl font-myFont p-2 px-10 mb-5 bg-lime-900 rounded-full">{userName}</h1>
          <p className="text text-black text-center font-myFont py-8">{Content}</p>
          <p className="text-center text-black font-myFont">Get yours at canditapp.com</p>
        </div>

        <div className="flex flex-col items-center mt-0">
          <Image src={Logo} alt="Logo" />
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
    </>
  );
}
