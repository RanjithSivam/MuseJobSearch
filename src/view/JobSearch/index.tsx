import React, { FC, useEffect } from 'react';
import Search from 'component/Search';
import { getJobList } from 'api/jobFetch';

const JobSearch: FC = () => {
  useEffect(() => {
    getJobList(1);
  }, []);
  return (
    <div className="px-12 py-8 flex flex-col gap-4">
      <header className="flex flex-col gap-8">
        <div className="capitalize flex gap-1 text-xl font-poppins">
          <h1 className="font-bold">github</h1>
          <p className="font-light">jobs</p>
        </div>
        <div
          className="w-full rounded p-8 flex items-center justify-center"
          style={{ backgroundImage: 'url(/images/backgroundImg.png)' }}
        >
          <Search />
        </div>
      </header>
      <main>
        <div></div>
        <div></div>
      </main>
    </div>
  );
};

export default JobSearch;
