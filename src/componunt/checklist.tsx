import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import styled from '@emotion/styled';
import CheckBox from './checkbox';
import { GroupJsonText, ResutlGroupData } from '../model/type';
import {LIST_DATA} from '../assets/getAssetFile';

const CustomBgBox = styled(Box)`
background-color:#ffffff;
// height:100vh;
`;
const Item = styled(Paper)`
box-shadow:0px 0px 0px 0px;
`;

enum GroupSubName {

    A=1,
    B,
    C,
    X,
    Y,
    Z
}






function CheckList() {



const data:ResutlGroupData[] =  [{id : GroupSubName.A, core : 0},
                                {id : GroupSubName.B, core : 0},
                                {id : GroupSubName.C, core : 0},
                                {id : GroupSubName.X, core : 0},
                                {id : GroupSubName.Y, core : 0},
                                {id : GroupSubName.Z, core : 0},];



const selectA:number[] = [0,0,0,0,0,0,0,0];
const selectB:number[] = [0,0,0,0,0,0,0,0];
const selectC:number[] = [0,0,0,0,0,0,0,0];
const selectX:number[] = [0,0,0,0,0,0,0,0];
const selectY:number[] = [0,0,0,0,0,0,0,0];
const selectZ:number[] = [0,0,0,0,0,0,0,0];


const [dap, setDap] = useState({ 
    "A":selectA,
    "B":selectB,
    "C":selectC,
    "X":selectX,
    "Y":selectY,
    "Z":selectZ
});


const TextA:GroupJsonText[] = LIST_DATA.group1.A;
const TextB:GroupJsonText[] = LIST_DATA.group1.B;
const TextC:GroupJsonText[] = LIST_DATA.group1.C;
const TextX:GroupJsonText[] = LIST_DATA.group2.X;
const TextY:GroupJsonText[] = LIST_DATA.group2.Y;
const TextZ:GroupJsonText[] = LIST_DATA.group2.Z;

const add = (a:number):number =>{
    return 0;
}
const changeDap = (id:number, core:number) => {
    // const data = _data
}

const onChangeHandler = (event:React.ChangeEvent<HTMLInputElement>):void=>{
    const id = Number(event.target.name.substring(event.target.name.length-1, event.target.name.length));
    switch (event.target.name.charAt(0)) {
        
    
        case "A":
            
            setDap((value)=>{

                const _value = value.A.map((v,index)=>{
                   

                    if(index==id-1) { 
                       if(event.target.value==="yes") return 1 ;
                       else return 2;
                    }

                });
            
            
                
                return {...value, A:_value}
            })
        
            break;
    
        default:
            break;
    }

    console.log(dap);

}

    return (
        <Container maxWidth="xl" >

            <CustomBgBox>
                <Grid>
                <Typography> Group1</Typography>
                </Grid>
                <Grid container spacing={3} alignItems="stretch" direction="row">
                <Grid item xs={4}><Item>
                {
                    TextA.map((item,index)=>{
                        const name:string = "A"+item.id;
                        return <CheckBox label={item.label} checkId={name} key={index} onChangeHandler={onChangeHandler}/>
                    })
                }

            </Item> 
            </Grid>
            <Grid item xs={4}><Item>
            {
                TextB.map((item,index)=>{
                    const name:string = "B"+item.id;
                    return <CheckBox label={item.label} checkId={name} key={index} onChangeHandler={onChangeHandler}/>
                })
            }

        </Item> 
        </Grid>
        <Grid item xs={4}><Item>
        {
            TextC.map((item,index)=>{
                const name:string = "C"+item.id;
                return <CheckBox label={item.label} checkId={String(GroupSubName.C+index)} key={index} onChangeHandler={onChangeHandler}/>
            })
        }

    </Item> 
            </Grid>
                </Grid>

            </CustomBgBox>
            <CustomBgBox>
            <Grid>
            <Typography> Group2</Typography>
            </Grid>
            <Grid container spacing={3} alignItems="stretch" direction="row">
            <Grid item xs={4}><Item>
            {
                TextX.map((item,index)=>{
                    const name:string = "X"+item.id;
                    return <CheckBox label={item.label} checkId={String(GroupSubName.X+index)} key={index} onChangeHandler={onChangeHandler}/>
                })
            }

        </Item> 
        </Grid>
        <Grid item xs={4}><Item>
        {
            TextY.map((item,index)=>{
                const name:string = "Y"+item.id;
                return <CheckBox label={item.label} checkId={String(GroupSubName.Y+index)} key={index} onChangeHandler={onChangeHandler}/>
            })
        }

    </Item> 
    </Grid>
    <Grid item xs={4}><Item>
    {
        TextZ.map((item,index)=>{
            const name:string = "Z"+item.id;
            return <CheckBox label={item.label} checkId={String(GroupSubName.Z+index)} key={index} onChangeHandler={onChangeHandler}/>
        })
    }

</Item> 
        </Grid>
            </Grid>

        </CustomBgBox>
        
        <button> 결과확인하기 </button>
        </Container>
    );
}

export default CheckList;