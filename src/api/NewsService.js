import axios from "axios";

const url = `https://api.spaceflightnewsapi.net/v4/articles`;

export class NewsService {
  static getNews(limit, offset) {
    return axios(url + `/?limit=${limit}&offset=${offset}`);
  }

  static getNewsDetails(id) {
    return axios(url + `/${id}`);
  }

  static searchNews(search) {
    return axios(url + `/?search=${search}`);
  }
}
