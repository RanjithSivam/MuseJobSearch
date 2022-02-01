import { FC, useEffect, useState } from "react";
import { getJobList } from "api/jobFetch";
import Search from "component/Search";
import Pagination from "component/Pagination";
import Skeleton from "component/Skeleton";
import Card from "component/Card";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { ActionMeta } from "react-select";

const animatedComponents = makeAnimated();

const categoryOption = [
  { value: "Accounting", label: "Accounting" },
  { value: "Corporate", label: "Corporate" },
  { value: "Customer Service Career", label: "Customer Service Career" },
  { value: "Data Science", label: "Data Science" },
  { value: "Design", label: "Design" },
  { value: "Editor", label: "Editor" },
  { value: "Education", label: "Education" },
  { value: "HR", label: "HR" },
  { value: "IT", label: "IT" },
  { value: "Law", label: "Law" },
  { value: "Marketing", label: "Marketing" },
  { value: "Mechanic", label: "Mechanic" },
  { value: "Mental Health", label: "Mental Health" },
  { value: "Nurses", label: "Nurses" },
  { value: "Office Administration", label: "Office Administration" },
  { value: "Physical Assistant", label: "Physical Assistant" },
  { value: "Product", label: "Product" },
  { value: "Recruiting", label: "Recruiting" },
  { value: "Retail", label: "Retail" },
  { value: "Sales", label: "Sales" },
  { value: "UX", label: "UX" },
  { value: "Videography", label: "Videography" },
  { value: "Writer", label: "Writer" },
  { value: "Software Engineer", label: "Software Engineer" },
  { value: "Public Relations", label: "Public Relations" },
  { value: "Project Management", label: "Project Management" },
  {
    value: "Account Management/Customer Success",
    label: "Account Management/Customer Success"
  }
];

const experienceOption = [
  { value: "Entry Level", label: "Entry Level" },
  { value: "Mid Level", label: "Mid Level" },
  { value: "Senior Level", label: "Senior Level" },
  { value: "Management", label: "Management" },
  { value: "Internship", label: "Intership" }
];

interface Jobs {
  categories: { name: string }[];
  contents: string;
  levels?: { name: string; short_name: string }[];
  model_type: string;
  refs: { landing_page: string };
  short_name: string;
  tags?: string[];
  type: string;
  company: { id: number; short_name: string; name: string };
  locations: { name: string }[];
  publication_date: string;
  id: number;
  name: string;
}

const JobSearch: FC = () => {
  const [jobList, setJobList] = useState<Jobs[] | undefined>(undefined);
  const [error, serError] = useState();
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [experience, setExperience] = useState<
    { value: string; label: string }[]
  >([]);
  const [category, setCategory] = useState<{ value: string; label: string }[]>(
    []
  );

  const getJobListData = async () => {
    setLoading(true);
    const { data } = await getJobList(page, experience, category);
    setJobList(data.results);
    setTotalPage(data.page_count);
    setLoading(false);
  };

  const changePage = (pageNo: number) => {
    setPage(pageNo);
  };

  useEffect(() => {
    getJobListData();
  }, [page]);

  return (
    <div className="px-6 py-4 lg:px-12 lg:py-8 flex flex-col gap-4 bg-grey min-h-screen	">
      <header className="flex flex-col lg:gap-8 gap-2">
        <div className="capitalize flex gap-1 lg:text-xl text-base font-poppins">
          <h1 className="font-bold">themuse</h1>
          <p className="font-light">jobs</p>
        </div>
        <div
          className="rounded p-4 lg:p-8 flex items-center justify-center"
          style={{ backgroundImage: "url(/images/backgroundImg.png)" }}
        >
          <Search />
        </div>
      </header>
      <main className="flex gap-4 flex-col lg:flex-row">
        <div className="lg:basis-1/4 flex flex-col lg:gap-4 gap-2">
          <h1 className="text-dark-blue font-bold uppercase lg:text-sm text-xs">
            filters
          </h1>
          <div className="flex flex-col gap-2">
            <h2 className="uppercase lg:text-sm text-xs">category</h2>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={categoryOption}
              onChange={(e: any) => setCategory(e)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="uppercase lg:text-sm text-xs">experience</h2>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={experienceOption}
              onChange={(e: any) => setExperience(e)}
            />
          </div>
          <button
            className="capitalize bg-dark-blue text-white rounded pointer p-1"
            onClick={getJobListData}
          >
            filter
          </button>
        </div>
        <div className="flex flex-col gap-4 basis-3/4">
          <div className="flex flex-col gap-4">
            {!loading
              ? jobList &&
                jobList.map((ele) => (
                  <Card
                    company={ele.company}
                    id={ele.id}
                    publication_date={ele.publication_date}
                    name={ele.name}
                    locations={ele.locations}
                    key={ele.id}
                  />
                ))
              : [1, 2, 3, 4, 5].map((ele) => <Skeleton />)}
          </div>
          <Pagination
            current={page}
            total={totalPage}
            changePage={changePage}
            loading={loading}
          />
        </div>
      </main>
    </div>
  );
};

export default JobSearch;
