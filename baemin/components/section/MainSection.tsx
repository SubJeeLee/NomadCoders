import MainCard from "../card/MainCard";

export default function MainSection() {
    return(
        <section className="h-full">
            <div className="flex">
            {["배달","B마트","배민스토어"].map((value: string, index:number)=>(
            <MainCard key={index} title={value} />   
            ))}
            </div>
        </section>
    );
}