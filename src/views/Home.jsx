import { useEffect, useState } from "react";
import { NewsService } from "../api/NewsService";
import Card from "../components/Card";

const Home = ({ searchValueProp, sortValueProp }) => {
  console.log(searchValueProp);
  console.log(sortValueProp);
  const [news, setNews] = useState([]);

  const getNews = async () => {
    const { data } = await NewsService.getNews();
    setNews(data.results);
    // console.log(news);
  };

  useEffect(() => {
    getNews();
  }, []);

  const getNewsSearch = async (searchValue) => {
    const { data } = await NewsService.searchNews(searchValue);
    setNews(data.results);
  };

  useEffect(() => {
    if (searchValueProp.length > 0) {
      getNewsSearch();
    }
    if (searchValueProp === "") {
      getNews();
    }
  }, [searchValueProp]);

  return (
    <div className="w-full flex flex-col justify-center">
      {news.map((item, index) => {
        return <Card key={index} data={item} />;
      })}
    </div>
  );
};

export default Home;
