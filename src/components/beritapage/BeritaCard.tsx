interface BeritaCardProps {
  judul: string;
  content: string;
  //   image: string;
}

const BeritaCard = ({
  judul = "Judul Berita",
  content = "Deskripsi Berita",
}: BeritaCardProps) => {
  return (
    <button className="relative flex flex-col items-center bg-primary-100 w-[15.625vw] hover:scale-110 aspect-[300/550] cursor-pointer rounded-[1.563vw] border-[0.104vw] border-primary-100 drop-shadow-[0_12px_4px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_0_20px_15px_rgba(21,128,61,0.25)]">
      {/* <Image
        src={image}
        width={1920}
        height={550}
        sizes="15.625vw"
        alt="Image Berita"
          /> */}
      <div className="flex bg-primary-100 w-full h-[50%] rounded-t-[1.563vw]"></div>
      <div className="flex flex-col bg-white w-full h-[50%] rounded-b-[1.563vw] p-[1.111vw]">
        <div className="font-montserrat font-semibold text-[1.563]">
          {judul}
        </div>
        <div className="font-montserrat">{content}</div>
      </div>
    </button>
  );
};

export default BeritaCard;
