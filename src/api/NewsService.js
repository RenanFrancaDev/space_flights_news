import axios from "axios";

const url = `https://api.spaceflightnewsapi.net/v4/articles`;

export class NewsService {
  static getNews(limit, offset) {
    return axios(url + `/?limit=${limit}&offset=${offset}`);
  }

  static getAllNews() {
    return axios(url + `/?limit=1000000&offset=0`);
  }

  static getNewsDetails(id) {
    return axios(url + `/${id}`);
  }

  static searchNews(search) {
    return axios(url + `/?search=${search}`);
  }
}
