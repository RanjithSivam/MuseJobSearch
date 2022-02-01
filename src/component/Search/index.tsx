import { ChangeEvent, FC, useState } from "react";

const Search: FC = () => {
  const [value, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  const handleClick = (): void => {};

  return (
    <div className="rounded flex items-center bg-white p-1 lg:w-2/3 w-full">
      <i className="material-icons text-base lg:text-lg pl-2 text-light-grey">
        work_outline
      </i>
      <input
        className="w-full px-2 placeholder:font-roboto placeholder:text-xs lg:placeholder:text-sm placeholder:text-light-grey outline-0 text-dark-blue text-md font-roboto"
        type="text"
        placeholder="Title, companies, expertie or benefits"
        value={value}
        onChange={handleChange}
      />
      <button
        className="bg-blue text-white capitalize px-2 py-1 lg:px-8 lg:py-2 rounded font-roboto lg:text-base text-sm"
        onClick={handleClick}
      >
        search
      </button>
    </div>
  );
};

export default Search;
