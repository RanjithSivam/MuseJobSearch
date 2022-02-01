import axios from "axios";

const restTemplateForJobs = axios.create({
  baseURL: "https://www.themuse.com/api/public",
  params: {
    api_key: process.env.REACT_APP_API
  }
});

const getJobList = (
  page: Number,
  experience?: { value: string; label: string }[],
  category?: { value: string; label: string }[]
) => {
  let exp = {};
  experience?.forEach((e) => (exp = { ...exp, level: e.value }));
  category?.forEach((e) => (exp = { ...exp, category: e.value }));
  exp = { ...exp, page: page };
  return restTemplateForJobs.get("/jobs", {
    params: exp
  });
};

const getJobById = (id: Number) => {
  return restTemplateForJobs.get(`/jobs/${id}`);
};

export { getJobList, getJobById };
