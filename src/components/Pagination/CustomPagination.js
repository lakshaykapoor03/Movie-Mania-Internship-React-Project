import React from 'react';
import { Pagination } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme= createTheme({
    palette:{
        mode:"dark",
    }
}
)

function CustomPagination({setPage, numOfPages=10}) {
    const handlePageChange=(page)=>{
        setPage(page)
        window.scroll(0,0)
    }
      return (
        <div className=" text-[white] w-[100%] flex justify-center mb-[60px] ">
            <ThemeProvider theme={darkTheme}>
            <Pagination count={numOfPages} color="primary" hideNextButton hidePrevButton  onChange={(e)=> handlePageChange(e.target.textContent)}/>
            </ThemeProvider>
            </div>
      )
    }
    
    export default CustomPagination