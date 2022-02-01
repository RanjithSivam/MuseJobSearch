import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getJobById } from "api/jobFetch";
import moment from "moment";

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

export default function JobProfile() {
  const [job, setJob] = useState<Jobs | null>(null);
  const { id: jobId } = useParams();

  const getJob = async () => {
    if (jobId) {
      const { data }: { data: Jobs } = await getJobById(parseInt(jobId, 10));
      setJob(data);
    }
  };
  useEffect(() => {
    getJob();
  }, [jobId]);
  return (
    <div className="px-6 py-4 lg:px-12 lg:py-8 flex flex-col gap-4 bg-grey min-h-screen">
      <header className="flex flex-col lg:gap-8 gap-2">
        <div className="capitalize flex gap-1 lg:text-xl text-base font-poppins">
          <h1 className="font-bold">themuse</h1>
          <p className="font-light">jobs</p>
        </div>
      </header>
      <div className="flex gap-8 flex-col lg:flex-row">
        <div className="basis-1/4 flex flex-col lg:gap-8 gap-4">
          <Link className="flex gap-2 text-blue text-sm" to="/">
            <i className="material-icons">keyboard_backspace</i>
            <p className="font-bold">Back to search</p>
          </Link>
          <div className="flex flex-col gap-2">
            <h4 className="uppercase text-light-grey font-bold text-sm">
              how to apply
            </h4>
            <p className="text-dark-blue font-bold text-sm">
              Please email a copy of your resume and online portfolio to:{" "}
              <a href={job?.refs.landing_page} className="text-blue underline">
                https://www.themuse.com/
              </a>
            </p>
          </div>
        </div>
        <div className="basis-3/4">
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 lg:flex-row flex-col">
              <h1 className="capitalize text-xl font-bold text-dark-blue">
                {job?.name}
              </h1>
              <p className="text-dark-blue border border-dark-blue rounded capitalize lg:py-1 lg:px-2 py-0.5 px-1 font-bold text-sm self-start">
                full time
              </p>
            </div>
            <p className="flex items-center gap-1 text-sm text-light-grey">
              <span className="material-icons text-sm">schedule</span>
              <small className="font-bold">
                {moment(job?.publication_date).fromNow()}
              </small>
            </p>
            <div className="flex gap-2 mt-4 mb-8">
              <div className="w-24 flex items-center rounded">
                <img
                  src={`https://assets.themuse.com/uploaded/companies/${job?.company.id}/small_logo.png?v=10ea4eb650de2d1ade64d89d0317e18970e14ad334e29292d381b68572fd849b`}
                  alt=""
                  className="w-full"
                />
              </div>
              <div>
                <small className="text-base lg:text-xl text-dark-blue font-bold">
                  {job?.company.name}
                </small>
                <p className="flex justify-center items-center gap-1 text-light-grey lg:text-sm text-xs">
                  <span className="material-icons text-sm">public</span>
                  <small className="font-light">
                    {job?.locations?.[0].name}
                  </small>
                </p>
              </div>
            </div>
          </div>
          <div
            className="text-sm lg:text-base"
            dangerouslySetInnerHTML={{
              __html: job ? job?.contents : ""
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
