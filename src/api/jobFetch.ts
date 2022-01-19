import axios from 'axios';


const restTemplateForJobs = axios.create({
    baseURL:'https://www.themuse.com/api/public/jobs',
    params:{
        'api_key':process.env.REACT_APP_API
    }
});

const getJobList = async (page:Number) => {
    const {data} = await restTemplateForJobs.get('',{
        params:{
            page:page
        }
    });

    console.log(data)
}

export {getJobList}