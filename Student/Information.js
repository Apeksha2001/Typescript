"use strict";
//Display Class Data Using Advanced Feature of typescript
Object.defineProperty(exports, "__esModule", { value: true });
exports.displaySchoolDetails = exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(studentId, studentName, studentAge) {
        this.studentId = studentId;
        this.studentName = studentName;
        this.studentAge = studentAge;
    }
    Student.prototype.display = function () {
        console.log("\n            Student Id            ::".concat(this.studentId, "\n            Student Name          ::").concat(this.studentName, "\n            Student Age           ::").concat(this.studentAge, "\n        "));
    };
    return Student;
}());
exports.Student = Student;
function displaySchoolDetails() {
    console.log("School time is 8 AM");
}
exports.displaySchoolDetails = displaySchoolDetails;
