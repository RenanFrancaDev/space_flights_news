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
    if (sortValueProp == "") {
      const { data } = await NewsService.getNews(limit, offset);
      return setNews(data.results);
    }

    if (sortValueProp != "") {
      const { data } = await NewsService.getAllNews();

      if (sortValueProp == "-1") {
        console.log("mais nova");
        data.results.sort((a, b) => {
          return b.published_at.localeCompare(a.published_at);
        });
      }
      if (sortValueProp == "1") {
        console.log("mais antiga");
        data.results.sort((a, b) => {
          return a.published_at.localeCompare(b.published_at);
        });
      }
      setNews(data.results);
    }
    // console.log(news);
  };

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
  }, [offset, sortValueProp]);

  return (
    <div className="w-full flex flex-col justify-center items-center gap-16">
      {news.map((item, index) => {
        return <Card key={index} data={item} />;
      })}
      <button
        className="mb-2 p-2 text-fuchsia-600 border-fuchsia-600 border-2 "
        onClick={handleClick}
      >
        Carregar Mais
      </button>
    </div>
  );
};

export default Home;
