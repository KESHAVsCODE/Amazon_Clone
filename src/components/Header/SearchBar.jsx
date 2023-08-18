import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <div className="flex h-10 flex-grow">
      <input
        name="product-search"
        className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
        type="text"
        placeholder="Search Amazon.in"
      />
      <span
        className=" bg-amazon_yellow flex h-full w-12 items-center justify-center cursor-pointer 
                        rounded rounded-s-none hover:bg-[#f3a847]  text-amazon_blue"
      >
        <SearchIcon style={{ fontSize: "30px", color: "black" }} />
      </span>
    </div>
  );
};

export default SearchBar;
