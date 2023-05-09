import { inputType } from "../API/listHandle/listModel";

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

//defines the input field in the document//

// class docField {
//   constructor(public fieldType: inputType, public fieldData: any) {}
// }

// renderInputTypeList(inputTypeList);

//end of defines the input field in the document//
