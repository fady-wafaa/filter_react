import NightsStayIcon from '@material-ui/icons/NightsStay';
import { useEffect, useState } from 'react';

import Galleryreact from "./components/tabMenu/Galleryreact";


function App() {



const getTheme = ()=>{
    return JSON.parse(localStorage.getItem("theme")) || false
}

const [ theme , setTheme] = useState(getTheme());

useEffect(()=>{
    localStorage.setItem("theme",JSON.stringify(theme))
},[theme])


  return (
    <div className={theme ? "theme-dark" : ''}>

<div className="content-bg main-content">
     
        <NightsStayIcon  onClick={()=> setTheme(!theme)}  checked={theme ? "true": ''} className={theme? 'gold' : 'dark'} />
      </div>
        <Galleryreact />
    </div>
  );
}

export default App;
