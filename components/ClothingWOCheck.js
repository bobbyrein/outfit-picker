import Image from "next/image";

function ClothingWOCheck({ imageAlt, clothing }) {
  const imageSource = clothing.medias.edges[0]?.node.mediaUrl;

  return (
    <>
      <div class="grid h-64 card bg-base-300 rounded-box relative">
        {imageSource ? (
          <Image src={imageSource} alt={imageAlt} layout="fill"></Image>
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <p>No image found</p>
          </div>
        )}
      </div>
    </>
  );
}

export default ClothingWOCheck;
