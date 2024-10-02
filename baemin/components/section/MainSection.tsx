import MainCard from "../card/MainCard";
import DeliveryCard from "../card/DeliveryCard";

type PropertyType = {
    // 필요한 속성 정의
    title: string;
    description: string;
    imageURL: string;
    // 추가 속성...
  };

const property = [
    {
        title:"배달",
        description:  "세상은 넓고 맛집은 없다",
        imageURL: "/images/1.png",
    },
    {
        title:"B마트",
        description:  "장보기도 더 빠르게",
        imageURL: "/images/1.png",
    },
    {
        title:"배민스토어",
        description:  "배달은 지금 옵니다",
        imageURL: "/images/1.png",
    },
];

export default function MainSection() {
  return (
    <section className="h-full">
      <div className="flex">
        {property.map((value: PropertyType, index: number) => (
          <MainCard key={index} property={value} />
        ))}
      </div>
        <DeliveryCard />
    </section>
  );
}
