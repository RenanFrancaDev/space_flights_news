import { useEffect, useState } from "react";
import { NewsService } from "../api/NewsService";
import Card from "../components/Card";

const Home = ({ searchValueProp, sortValueProp }) => {
  // console.log(searchValueProp);
  // console.log(sortValueProp);
  const [news, setNews] = useState([]);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  const getNews = async (limit, offset) => {
    console.log("limit", limit);
    console.log("offset", offset);
    const { data } = await NewsService.getNews(limit, offset);
    setNews(data.results);
    // console.log(news);
  };

  useEffect(() => {
    getNews(limit, offset);
  }, []);

  const getNewsSearch = async (searchValueProp) => {
    const { data } = await NewsService.searchNews(searchValueProp);
    setNews(data.results);
  };

  useEffect(() => {
    if (searchValueProp.length > 0) {
      getNewsSearch(searchValueProp);
    }
    if (searchValueProp === "") {
      getNews(limit, offset);
    }
  }, [searchValueProp]);

  const handleClick = () => {
    setOffset((prev) => {
      return prev + 10;
    });
    setLimit((prev) => {
      return prev + 10;
    });
  };

  useEffect(() => {
    getNews(limit, offset);
  }, [offset]);

  return (
    <div className="w-full flex flex-col justify-center items-center gap-16">
      {news.map((item, index) => {
        return <Card key={index} data={item} />;
      })}
      <button onClick={handleClick}>Ver Mais</button>
    </div>
  );
};

export default Home;
