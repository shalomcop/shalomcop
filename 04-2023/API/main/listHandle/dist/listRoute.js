"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var listControl_1 = require("./listControl");
router.get("/get-list", listControl_1.listGenerator);
exports["default"] = router;
