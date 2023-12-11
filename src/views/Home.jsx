import { useEffect, useState } from "react";
import { NewsService } from "../api/NewsService";
import Card from "../components/Card";

const Home = () => {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    const { data } = await NewsService.getNews();
    console.log(data);

    setNews(data);
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="w-full flex justify-center">
      <Card data={news} />
    </div>
  );
};

export default Home;
