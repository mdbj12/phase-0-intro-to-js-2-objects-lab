const employee = {
    name: "Michael",
    streetAddress: "363 Windham Loop"
};
function updateEmployeeWithKeyAndValue(employee, streetAddress) {
    return {
        ...employee,
        [streetAddress]: "11 Broadway"
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress) {
    employee[streetAddress] = "12 Broadway";
    return employee;
}
function deleteFromEmployeeByKey(employee, name) {
    return {
        ...employee,
        [name]: undefined
    };
}
function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name;
    return employee;
}