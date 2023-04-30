import {inputTypeList} from "./listModel";
import { inputType } from "./listModel";


function renderInputTypeList(inputTypeList: Array<inputType>) {
    try {
      if (!inputTypeList) throw new Error("No inputTypeList");
  
      const html = inputTypeList
        .map((inputType) => {
          return renderInputType(inputType);
        })
        .join("");
      const inputTypeListElement = document.querySelector("#inputTypeList");
      if (!inputTypeListElement)
        throw new Error("coundnt find inputTypeList element on DOM");
      inputTypeListElement.innerHTML = "<select>" + html + "</select>";
    } catch (error) {
      console.error(error);
    }
  }
  
  function renderInputType(inputType: inputType) {
    try {
      console.log(inputType);
      return `<option value="${inputType.typeName}">${inputType.typeName}</option>`;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

export const listGenerator = (req:any, res:any) => {
    try {
        const list = renderInputTypeList (inputTypeList);
        res.send ({list});
    } catch (error:any) {
        console.error(error)
        res.staus(500).send({error: error.message});        
    }
}