import { useEffect, useState } from "react";
import { NewsService } from "../api/NewsService";
import Card from "../components/Card";

const Home = (searchValue) => {
  console.log(searchValue);
  const [news, setNews] = useState([]);

  const getNews = async () => {
    const { data } = await NewsService.getNews();
    setNews(data.results);
    console.log(news);
  };

  useEffect(() => {
    getNews();
  }, []);

  const getNewsSearch = async (searchValue) => {
    const { data } = await NewsService.searchNews(searchValue);
    setNews(data.results);
  };

  useEffect(() => {
    if (searchValue.length > 0) {
      getNewsSearch();
      console.log("123");
    }
    if (searchValue === "") {
      getNews();
      console.log("eu");
    }
  }, [searchValue]);

  return (
    <div className="w-full flex justify-center">
      <Card data={news} />
    </div>
  );
};

export default Home;
