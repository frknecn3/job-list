import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobs:[],
    mainJobs:[],
    initialized:false,
    isError:false
}

const jobSlice = createSlice({
    name:"jobs",
    initialState,
    reducers:{
        setJob:(state,action)=>{
            state.jobs=action.payload;
            state.mainJobs=action.payload;
            state.initialized=true;
            state.isError=false;
        },
        setError:(state) => {
        state.initialized=true;
        state.isError=true},
        filterBySearch:(state,action)=>{
            const query = action.payload.toLowerCase()
            const filter = state.mainJobs.filter((job)=>job.company.toLowerCase().includes(query))
            state.jobs = filter
        },
        filterByStatus:(state,action)=>{
            const filtered = state.mainJobs.filter((job)=>job.status===action.payload);
            state.jobs=filtered
        },
        filterByType:(state,action)=>{
            const filtered = state.mainJobs.filter((job)=>job.type===action.payload);
            state.jobs=filtered
        },
        sortJobs:(state,action)=>{
            switch(action.payload){
                case 'A-Z':
                    state.jobs.sort((a,b)=>a.company.localeCompare(b.company))
                    break;
                case 'Z-A':
                    state.jobs.sort((a,b)=>b.company.localeCompare(a.company))
                    break;
                case 'En Yeni':
                    state.jobs.sort((a,b)=> new Date(b.date) - new Date(a.date))
                    break;
                case 'En Eski':
                    state.jobs.sort((a,b)=> new Date(a.date) - new Date(b.date))
                    break;
                    
            }
        },
        clearFilters:(state)=>{
            const filtered = state.mainJobs
            state.jobs = filtered
        }
    }
})

export const {setJob,setError,filterBySearch,filterByStatus,filterByType,sortJobs,clearFilters} = jobSlice.actions

export default jobSlice.reducer