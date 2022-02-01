import moment from "moment";
import { FC } from "react";
import { Link } from "react-router-dom";

interface CardProps {
  company: { id: number; short_name: string; name: string };
  locations: { name: string }[];
  publication_date: string;
  id: number;
  name: string;
}

const Card: FC<CardProps> = ({
  company,
  locations,
  publication_date,
  id,
  name
}): JSX.Element => {
  return (
    <Link
      className="flex p-2 rounded shadow font-roboto gap-4 bg-white cursor-pointer hover:shadow-md"
      to={`/${id}`}
    >
      <div className="w-24 flex items-center rounded">
        <img
          src={`https://assets.themuse.com/uploaded/companies/${company.id}/small_logo.png?v=10ea4eb650de2d1ade64d89d0317e18970e14ad334e29292d381b68572fd849b`}
          alt=""
          className="w-full"
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex flex-col gap-1 text-dark-blue">
          <small className="text-xs lg:text-sm font-bold">{company.name}</small>
          <h4 className="capitalize text-sm lg:text-lg font-light">{name}</h4>
        </div>
        <div className="flex justify-between">
          <p className="text-dark-blue border border-dark-blue rounded capitalize lg:py-1 lg:px-2 px-1 py-0.25 font-bold text-xs lg:text-sm hidden lg:block">
            full time
          </p>
          <div className="flex lg:gap-8 gap-1 text-light-grey font-light text-xs">
            {locations &&
              locations.map((ele) => (
                <p className="flex justify-center items-center lg:gap-1 gap-0.5">
                  <span className="material-icons text-sm">public</span>
                  <small className="font-bold">{ele.name}</small>
                </p>
              ))}
            <p className="flex justify-center items-center lg:gap-1 gap-0.5">
              <span className="material-icons text-sm">schedule</span>
              <small className="font-bold">
                {moment(publication_date).fromNow()}
              </small>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
