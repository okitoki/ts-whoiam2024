import React from 'react';
import { ResutlJsonText } from '../model/type';
import { RESUTL_DATA } from '../assets/getAssetFile';
import { Typography } from '@mui/material';


const ResultPage:React.FC = () => {

    const resutlData : ResutlJsonText[] = RESUTL_DATA.data;

    return (
       <>
       <Typography variant = "h1" component="h3">
        {resutlData[0].name}
       </Typography>
       <Typography variant = "h2" component="h5">
        {resutlData[0].number}
       </Typography>
       <Typography variant = "h2" component="h5">
        {resutlData[0].title}
       </Typography>
       <Typography variant = "h2" component="h5">
        {resutlData[0].cont}
       </Typography>
       </>
    );
}


export default ResultPage;