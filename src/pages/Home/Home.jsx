import { Card } from "../../components/Card/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { news } from "../../Datas";
import { HomeBody } from "./HomeStyled";

export function Home() {
    return(
        <>
        <Navbar />
        <HomeBody>
            {news.map((item, index) => (
                <Card news={item} key={index} />
            ))}
        </HomeBody>
        </>
    );
};
