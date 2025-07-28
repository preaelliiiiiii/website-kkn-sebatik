import Image from "next/image";

export type LayananInformasiCardProps = {
  judul: string;
};

const judulList = ["Profil", "Fasilitas", "Kewilayahan", "UMKM"];

function LayananInformasiCard({ judul = "Profil" }: LayananInformasiCardProps) {
  return (
    <div className="relative flex flex-col justify-center items-center w-[18.229vw] aspect-square drop-shadow-[0_12px_8px_rgba(0,0,0,0.25)] bg-[#D9D9D9] border-[0.104vw] border-primary-100 rounded-[1.563vw] p-[1.25vw]">
      <div className="flex flex-col gap-[0.625vw] items-center">
        <div className="relative bg-white w-[13.021vw] aspect-[250/206] rounded-[1.563vw]"></div>
        <p className="font-montserrat font-semibold text-[1.5vw] text-primary-100">
          {judul}
        </p>
      </div>
    </div>
  );
}

const LayananInformasi = () => {
  return (
    <section className="w-[90%] flex flex-col">
      <h1 className="font-hankenGrotesk font-bold text-[3.906vw] text-primary-100">
        LAYANAN INFORMASI
      </h1>
      <div className="w-full flex flex-row items-center gap-[0.416vw]">
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
      <div className="flex flex-row gap-[4.948vw]">
        {judulList.map((judul: string, index: number) => {
          return <LayananInformasiCard judul={judul} key={index} />;
        })}
      </div>
    </section>
  );
};

export default LayananInformasi;
