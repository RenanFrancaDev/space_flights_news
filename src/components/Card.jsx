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
          className="w-[320px]"
        />
      </div>

      <div className="flex flex-col max-w-[400px] gap-2">
        <h2 className="font-semibold   text-base">{data.title}</h2>
        <div className="flex items-center justify-between mx-2">
          <small>{dayFormat}</small>
          <a href={data.url} className="border-2 border-black bg-gray-300 px-1">
            {data.news_site}
          </a>
        </div>
        <p className="overflow-hidden min-h-[50px] text-sm">
          {data.summary}...
        </p>
        <a
          href={data.url}
          className="border-2 w-[100px] text-center text-white py-2 bg-slate-600"
        >
          Ver mais
        </a>
      </div>
    </div>
  );
};

export default Card;
