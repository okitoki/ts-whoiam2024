export type CoverPageProps = {
    name?:string;
    id?:number;
  };
  
export type ContentLayout= {
    id?:number;
};

export type CheckListProps= {
    id?:number;
};

export type CheckBoxProbs = {
    name?:string;
    label?:string;
    checkstate?:boolean;
    checkId:string;
}
export type Group1<T> = {
    A:[GroupJsonText];
    B:[GroupJsonText];
    C:[GroupJsonText];
}

export type Group2 = {
    X:[GroupJsonText],
    Y:[GroupJsonText],
    Z:[GroupJsonText]
}

export type GroupJsonText = {

    id:string;
    label:string;
}

export type ResutlJsonText = {
    id : number;
    name : string;
    number : string;
    title : string;
    cont :string;

}

export type ResutlGroupData = {
    id : Number;
    core : Number;
}