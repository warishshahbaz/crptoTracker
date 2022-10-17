
import React, { Children, createContext, useContext, useEffect, useState } from "react";
import axiou from 'axios';

const AppContext = React.createContext();

const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false`

const AppProvider = ({children})=>{
    const [state,setStat] = useState([]);
    const[inputs,setInputs] = useState('');
    // const[tmers,setTimers] = useState(false);
    const[page,setPages] = useState(1);
    const[DataperPage,setDataPerPages] = useState(10);

    const indexOfLastPost = page * DataperPage;
    const indexOfFirstPost = indexOfLastPost - DataperPage;
    const fetchCryptoData = async() => {
       
        let res = await axiou(url);
        // console.log(res.data);
        setStat(res.data);
    }
    // console.log(DataperPage);
    useEffect(()=>{
        let times = setTimeout(()=>{
            fetchCryptoData();
        },1000);

        return ()=>{
            return clearTimeout(times);
        }
       
    },[inputs]);

    
    const filterdSearch = state.filter((ele,idx)=>{
        return ele.name.toLowerCase().includes(inputs.toLowerCase());
     });

    const HandleChange = (e) => {
        setInputs(e.target.value);
        console.log(inputs);
        setStat(filterdSearch);
    }
    // pagination
    const paginatePerPage = (num) =>{
        setPages(num)
    }
    const previewPage =()=>{
        if(Number(page) > 0){
            setPages(page - DataperPage);
            // setDataPerPages(DataperPage-20);
            // console.log(page);
            // console.log(DataperPage);
        }
       
    }
    const nextPage = ()=>{
        if(page < state.length-1){
            setPages(page + 20);
            setDataPerPages(DataperPage+20);
            console.log(page);
            console.log(DataperPage);
        }
    }
   
    return <AppContext.Provider value={{state,HandleChange,filterdSearch,indexOfLastPost,indexOfFirstPost,previewPage,nextPage,DataperPage,paginatePerPage}} >
        {children}
    </AppContext.Provider>
}

// custom hook
const useGlobleContext = () =>{
  return  useContext(AppContext);
}
export  {AppProvider,useGlobleContext,AppContext};