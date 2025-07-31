import Image from "next/image";

export type LayananInformasiCardProps = {
  title: string;
  iconSrc: string;
};

const layananList = [
  {
    title: "Profil",
    iconSrc: "https://img.icons8.com/ios-filled/100/0b4227/source-code.png",
  },
  {
    title: "Prasarana",
    iconSrc:
      "https://api.builder.io/api/v1/image/assets/TEMP/57d412d4f5a491d5a60eaa6117fc9fec67e4477a?placeholderIfAbsent=true&apiKey=0707a54a2959497db6f85956b825bfde",
  },
  {
    title: "Kewilayahan",
    iconSrc: "https://img.icons8.com/ios-filled/100/0b4227/map.png",
  },
  {
    title: "UMKM",
    iconSrc:
      "https://api.builder.io/api/v1/image/assets/TEMP/f2a98b30b5b1bac95f35afb1ba23dd3fa1177b95?placeholderIfAbsent=true&apiKey=0707a54a2959497db6f85956b825bfde",
  },
  {
    title: "SDA",
    iconSrc:
      "https://api.builder.io/api/v1/image/assets/TEMP/8ec2b2e84138b025d82ff2e28178db8109289d83?placeholderIfAbsent=true&apiKey=0707a54a2959497db6f85956b825bfde",
  },
  {
    title: "Budaya",
    iconSrc:
      "https://api.builder.io/api/v1/image/assets/TEMP/ef6082d9e5dab750719f31054bb10b6c82570240?placeholderIfAbsent=true&apiKey=0707a54a2959497db6f85956b825bfde",
  },
];

function LayananInformasiCard({ title, iconSrc }: LayananInformasiCardProps) {
  return (
    <div className="group relative flex flex-col justify-center items-center w-[18.229vw] aspect-square bg-[#D9D9D9] border-[0.104vw] border-primary-100 rounded-[1.563vw] p-[1.25vw] shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer overflow-hidden">
      <div className="flex flex-col gap-[0.625vw] items-center z-10">
        <div className="relative bg-white w-[13.021vw] aspect-[250/206] rounded-[1.563vw] flex items-center justify-center">
          <img src={iconSrc} alt={title} className="w-[6vw] h-[6vw] object-contain" />
        </div>
      </div>

      {/* Overlay muncul saat hover */}
      <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-full bg-white bg-opacity-90 flex justify-center items-end p-4 rounded-[1.563vw] transition-all duration-300 ease-in-out">
        <p className="font-montserrat font-semibold text-[1.5vw] text-primary-100 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          {title}
        </p>
      </div>
    </div>
  );
}

const LayananInformasi = () => {
  return (
    <section className="w-[90%] mx-auto flex flex-col items-center">
      <h1 className="font-hankenGrotesk font-bold text-[3.906vw] text-primary-100 text-center">
        LAYANAN INFORMASI
      </h1>
      <div className="w-full flex flex-row items-center gap-[0.416vw] my-[1vw]">
        <hr className="w-[48%] border-primary-100 border-[0.26vw]" />
        <Image
          src={"/landingpage/Vector_Layanan_Informasi.png"}
          width={69}
          height={100}
          alt="Layanan Informasi Vector"
          className="w-[3.594vw] aspect-[69/100]"
        />
        <hr className="w-[48%] border-primary-100 border-[0.26vw]" />
      </div>

      <div className="grid grid-cols-3 gap-[4.948vw]">
        {layananList.map((item, index) => (
          <LayananInformasiCard title={item.title} iconSrc={item.iconSrc} key={index} />
        ))}
      </div>
    </section>
  );
};

export default LayananInformasi;
