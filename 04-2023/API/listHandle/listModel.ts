class inputType {
    constructor(public typeName: any) {}
  }
  
  const inputTypeList: inputType[] = [];
  
  let newInputType: inputType = new inputType("H1");
  inputTypeList.push(newInputType);
  
  newInputType = new inputType("H2");
  inputTypeList.push(newInputType);
  newInputType = new inputType("H3");
  inputTypeList.push(newInputType);
  newInputType = new inputType("H4");
  inputTypeList.push(newInputType);
  newInputType = new inputType("H5");
  inputTypeList.push(newInputType);
  newInputType = new inputType("H6");
  inputTypeList.push(newInputType);
  newInputType = new inputType("p");
  inputTypeList.push(newInputType);
  
  console.log(inputTypeList);
  
  //end of defines all input types level for html tags//

  export {inputTypeList};
  export {inputType};