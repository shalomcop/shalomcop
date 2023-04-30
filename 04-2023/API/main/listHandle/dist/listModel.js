"use strict";
exports.__esModule = true;
exports.inputType = exports.inputTypeList = void 0;
var inputType = /** @class */ (function () {
    function inputType(typeName) {
        this.typeName = typeName;
    }
    return inputType;
}());
exports.inputType = inputType;
var inputTypeList = [];
exports.inputTypeList = inputTypeList;
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
