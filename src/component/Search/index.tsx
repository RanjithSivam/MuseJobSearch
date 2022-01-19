import { ChangeEvent, FC, useState } from 'react';

const Search: FC = () => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  const handleClick = (): void => {};

  return (
    <div className="rounded flex items-center bg-white p-1 w-2/3">
      <i className="material-icons text-lg pl-2 text-light-grey">
        work_outline
      </i>
      <input
        className="w-full px-2 placeholder:font-roboto placeholder:text-sm placeholder:text-light-grey outline-0 text-dark-blue text-md font-roboto"
        type="text"
        placeholder="Title, companies, expertie or benefits"
        value={value}
        onChange={handleChange}
      />
      <button
        className="bg-blue text-white capitalize px-8 py-2 rounded font-roboto"
        onClick={handleClick}
      >
        search
      </button>
    </div>
  );
};

export default Search;
