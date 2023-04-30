"use strict";
exports.__esModule = true;
exports.listGenerator = void 0;
var listModel_1 = require("./listModel");
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
        inputTypeListElement.innerHTML = "<select>" + html + "</select>";
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
exports.listGenerator = function (req, res) {
    try {
        var list = renderInputTypeList(listModel_1.inputTypeList);
        res.send({ list: list });
    }
    catch (error) {
        console.error(error);
        res.staus(500).send({ error: error.message });
    }
};
