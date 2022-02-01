import { FC } from "react";

interface PaginateProps {
  current: number;
  total: number;
  changePage: (pageNo: number) => void;
  loading: boolean;
}

const Paginate: FC<PaginateProps> = ({
  current,
  total,
  changePage,
  loading
}) => {
  return (
    <div className="flex items-center lg:gap-2 gap-1 self-end">
      {current > 1 && (
        <button
          className="border border-light-grey rounded flex justify-center items-center p-0.5 hover:border-blue disabled:cursor-not-allowed"
          disabled={loading}
          onClick={() => changePage(current - 1)}
        >
          <span className="material-icons text-light-grey hover:text-blue">
            arrow_left
          </span>
        </button>
      )}
      {current > 2 && (
        <button
          onClick={() => changePage(1)}
          className="border border-light-grey rounded flex justify-center items-center p-0.5 text-light-grey hover:border-blue hover:text-blue min-w-[1rem] lg:min-w-[1.5rem] disabled:cursor-not-allowed"
          disabled={loading}
        >
          1
        </button>
      )}
      {current - 1 - 2 > 0 && (
        <button className="text-light-grey border border-transparent rounded flex justify-center items-center p-0.5 cursor-default min-w-[1rem] lg:min-w-[1.5rem] disabled:cursor-not-allowed">
          ...
        </button>
      )}
      {current - 1 > 0 && (
        <button
          onClick={() => changePage(current - 1)}
          className="border border-light-grey rounded flex justify-center items-center p-0.5 text-light-grey hover:border-blue hover:text-blue min-w-[1rem] lg:min-w-[1.5rem] disabled:cursor-not-allowed"
          disabled={loading}
        >
          {current - 1}
        </button>
      )}
      <button className="border border-blue rounded flex justify-center items-center p-0.5 bg-blue text-white min-w-[1rem] lg:min-w-[1.5rem] disabled:cursor-not-allowed">
        {current}
      </button>
      {current + 1 <= total && (
        <button
          onClick={() => changePage(current + 1)}
          className="border border-light-grey rounded flex justify-center items-center p-0.5 text-light-grey hover:border-blue hover:text-blue min-w-[1rem] lg:min-w-[1.5rem] disabled:cursor-not-allowed"
          disabled={loading}
        >
          {current + 1}
        </button>
      )}
      {total - (current + 1) > 1 && (
        <button className="text-light-grey border border-transparent rounded flex justify-center items-center p-0.5 cursor-default min-w-[1rem] lg:min-w-[1.5rem] disabled:cursor-not-allowed">
          ...
        </button>
      )}
      {current < total - 1 && (
        <button
          onClick={() => changePage(total)}
          className="border border-light-grey rounded flex justify-center items-center p-0.5 text-light-grey hover:border-blue hover:text-blue min-w-[1rem] lg:min-w-[1.5rem] disabled:cursor-not-allowed"
          disabled={loading}
        >
          {total}
        </button>
      )}
      {current < total && (
        <button
          className="border border-light-grey rounded flex justify-center items-center p-0.5 text-light-grey hover:border-blue disabled:cursor-not-allowed"
          disabled={loading}
          onClick={() => changePage(current + 1)}
        >
          <span className="material-icons text-light-grey hover:text-blue">
            arrow_right
          </span>
        </button>
      )}
    </div>
  );
};

export default Paginate;
