var ResTypes;
(function (ResTypes) {
    ResTypes[ResTypes["SUCCESS"] = 0] = "SUCCESS";
    ResTypes[ResTypes["FAILED"] = 1] = "FAILED";
    ResTypes[ResTypes["UNAUTHORIZED"] = 2] = "UNAUTHORIZED";
})(ResTypes || (ResTypes = {}));
let response;
response = {
    name: "Tasnuva",
    type: ResTypes.FAILED, // O/P: type: 1
    country: "BD",
};
let response2;
response2 = {
    name: "Tasnuva",
    type: ResTypes.SUCCESS, // O/P: type: 0
    country: "BD",
};
export {};
//# sourceMappingURL=ENUMS.js.map