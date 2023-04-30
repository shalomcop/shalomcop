function renderInputTypeList (inputTypeList: Array<inputType>) {
    try {
      if (!inputTypeList) throw new Error("No inputTypeList");
  
      const html = inputTypeList
        .map((inputType) => {
          return renderInputType(inputType);
        })
        .join("");
      const inputTypeListElement = document.querySelector("#inputTypeList");
      if (!inputTypeListElement) throw new Error("coundnt find inputTypeList element on DOM");  
      inputTypeListElement.innerHTML = '<select>'+ html + '</select>'
    } catch (error) {
      console.error(error);
    }
  }
  
  function renderInputType (inputType: inputType) {
    try {
      console.log(inputType);
      return `<option value="${inputType.typeName}">${inputType.typeName}</option>`
    } catch (error) {
      console.error(error);
      return null;
    }
  }

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
  
  //defines the input field in the document//
  
  class docField {
    constructor(public fieldType: inputType, public fieldData: any) {}
  }

  renderInputTypeList(inputTypeList);
  
  //end of defines the input field in the document//

  