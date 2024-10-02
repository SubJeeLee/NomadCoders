import Image from "next/image";

type PropertyType = {
  // 필요한 속성 정의
  title: string;
  description: string;
  imageURL: string;
  // 추가 속성...
};

export default function MainCard({ property }: { property: PropertyType }) {
  return (
    <>
      <div className="relative w-full p-2 justify-between gap-2">
        <div className="w-full p-2 bg-white h-32 rounded-xl">
          <div className="flex flex-col w-full">
            <h2 className="text-xl font-bold">{property.title}</h2>
            <p className="w-24">{property.description}</p>
          </div>
        </div>

        {/* image */}
        <Image
          alt={property.title}
          src={property.imageURL}
          width={720}
          height={720}
          className="bg-slate-500 rounded-full w-8 h-8 absolute right-4 bottom-4"
        />
      </div>
    </>
  );
}
