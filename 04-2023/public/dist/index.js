function renderInputTypeList(inputTypeList) {
    try {
        if (!inputTypeList)
            throw new Error("No inputTypeList");
        var html = inputTypeList
            .map(function (inputType) {
            return renderInputType(inputType);
        })
            .join("");
        var inputTypeListElement = document.querySelector("#inputTypeList");
        if (!inputTypeListElement)
            throw new Error("coundnt find inputTypeList element on DOM");
        inputTypeListElement.innerHTML = '<select>' + html + '</select>';
    }
    catch (error) {
        console.error(error);
    }
}
function renderInputType(inputType) {
    try {
        console.log(inputType);
        return "<option value=\"" + inputType.typeName + "\">" + inputType.typeName + "</option>";
    }
    catch (error) {
        console.error(error);
        return null;
    }
}
var inputType = /** @class */ (function () {
    function inputType(typeName) {
        this.typeName = typeName;
    }
    return inputType;
}());
var inputTypeList = [];
var newInputType = new inputType("H1");
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
var docField = /** @class */ (function () {
    function docField(fieldType, fieldData) {
        this.fieldType = fieldType;
        this.fieldData = fieldData;
    }
    return docField;
}());
renderInputTypeList(inputTypeList);
//end of defines the input field in the document//
