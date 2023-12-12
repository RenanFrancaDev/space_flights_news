const Header = ({ searchProps, sortProps }) => {
  function handleSubmit(e) {
    e.preventDefault();
    const searchValue = e.target[0].value;
    searchProps(searchValue);
    e.target[0].value = "";
  }

  function handleChange(e) {
    const sortValue = e.target.value;
    sortProps(sortValue);
  }

  return (
    <header className="flex justify-between">
      <h1>Flights</h1>
      <div className="flex justify-end">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search a news"
            className="w-[250px] border-2"
          />
        </form>
        <select
          id="sort"
          className="w-[120px] border-2 mx-2"
          onChange={handleChange}
        >
          <option value="">Sort</option>
          <option value="-1">Mais Antigas</option>
          <option value="1">Mais Novas</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
