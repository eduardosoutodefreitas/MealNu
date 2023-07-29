import Image from 'next/image'
const Banner = () => {
  return (
    <div className="relative w-full aspect-video mt-2">
    <Image
      fill
      src="/banner.jpg"
      alt="restaurant banner"
      className=" rounded-lg"
      style={{
        objectFit: "cover",
      }}
    />
  </div>
  )
}

export default Banner