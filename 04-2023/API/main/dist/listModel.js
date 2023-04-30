//defines all input types level for html tags//
var inputType = /** @class */ (function () {
    function inputType(typeName) {
        this.typeName = typeName;
    }
    return inputType;
}());
var inputTypeList = [];
var newInputType = new inputType("t1");
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
//end of defines the input field in the document//
