const Card = ({ data }) => {
  return (
    <div className="flex flex-row gap-4">
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
          <small>{data.published_at}</small>
          <p href={data.url} className="border-2 border-black bg-gray-300 px-1">
            {data.news_site}
          </p>
        </div>
        <p>{data.summary}</p>
        <a
          href={data.url}
          className="border-2 w-[100px] text-center text-white bg-gray-700 py-2"
        >
          Ver mais
        </a>
      </div>
    </div>
  );
};

export default Card;
