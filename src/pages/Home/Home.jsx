import { Card } from "../../components/Card/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { news } from "../../Datas";

export default function Home() {
  return (
    <>
      <Navbar />
      {news.map((item, index) => (
        <Card news={item} key={index} />
      ))}
    </>
  );
};
