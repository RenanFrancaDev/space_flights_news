const Card = ({ data }) => {
  var date = new Date(data.published_at);

  let day = date.getDate();
  // day.length > 1 ? day : "0" + day;
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let dayFormat = day + "/" + month + "/" + year;

  return (
    <div className="flex flex-row gap-4 justify-center items-center">
      <div>
        <img
          src={data.image_url}
          alt={data.title}
          height={0}
          width={0}
          className="w-[250px]"
        />
      </div>

      <div className="flex flex-col w-[400px] gap-4">
        <h2>{data.title}</h2>
        <div className="flex items-center justify-between mx-2">
          <small>{dayFormat}</small>
          <p href={data.url} className="border-2 border-black bg-gray-300 px-1">
            {data.news_site}
          </p>
        </div>
        <p className="overflow-hidden h-[100px]">{data.summary}...</p>
        <a
          href={data.url}
          className="border-2 w-[100px] text-center text-white py-2"
        >
          Ver mais
        </a>
      </div>
    </div>
  );
};

export default Card;
