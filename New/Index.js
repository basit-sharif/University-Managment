var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a, _b;
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
    Person.prototype.getName = function () {
        return this.name;
    };
    ;
    return Person;
}());
;
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.rollNumber = 0;
        _this.course = [];
        return _this;
    }
    ;
    Student.prototype.regesterForCourse = function () {
        var _this = this;
        var Course = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            Course[_i] = arguments[_i];
        }
        this.course = this.course.concat(Course);
        Course.forEach(function (item) { return _this.rollNumber = item.nunberOfStudents; });
    };
    ;
    return Student;
}(Person));
;
var Instructor = /** @class */ (function (_super) {
    __extends(Instructor, _super);
    function Instructor(name, age, Salary) {
        var _this = _super.call(this, name, age) || this;
        _this.course = [];
        _this.salary = Salary;
        return _this;
    }
    ;
    Instructor.prototype.assignCourse = function () {
        var Course = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            Course[_i] = arguments[_i];
        }
        this.course = this.course.concat(Course);
    };
    ;
    return Instructor;
}(Person));
;
var Course = /** @class */ (function () {
    function Course(id, name) {
        this.nunberOfStudents = 0;
        this.students = [];
        this.instructors = [];
        this.id = id;
        this.name = name;
    }
    ;
    Course.prototype.addStudent = function () {
        var _this = this;
        var Student = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            Student[_i] = arguments[_i];
        }
        this.nunberOfStudents = ++this.nunberOfStudents;
        this.students = this.students.concat(Student);
        Student.forEach(function (item) { return item.regesterForCourse(_this); });
    };
    ;
    Course.prototype.setInstructor = function () {
        var _this = this;
        var Instructor = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            Instructor[_i] = arguments[_i];
        }
        this.instructors = this.instructors.concat(Instructor);
        Instructor.forEach(function (item) { return item.assignCourse(_this); });
    };
    return Course;
}());
;
var Department = /** @class */ (function () {
    function Department(name) {
        this.courses = [];
        this.name = name;
    }
    ;
    Department.prototype.addCourse = function () {
        var course = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            course[_i] = arguments[_i];
        }
        this.courses = this.courses.concat(course);
    };
    ;
    return Department;
}());
// let student1 = new Student("Abdul-Basit" , 17 );
// let student2 = new Student("Abdul-Haseeb" , 14);
// let student3 = new Student("Anas",17);
// let instructor1 = new Instructor("Habibullah",25,100000);
// let course1 = new Course("BCC","Blockchain");
// course1.addStudent(student1);
// course1.addStudent(student2);
// course1.addStudent(student3);
// course1.setInstructor(instructor1);
// let department1 = new Department("Computer-Science");
// department1.addCourse(course1);
// DOM // DOM // DOM //
var course1 = JSON.parse(localStorage.getItem("course1"));
var course2 = JSON.parse(localStorage.getItem("course2"));
var course3 = JSON.parse(localStorage.getItem("course4"));
var course4 = JSON.parse(localStorage.getItem("course3"));
// create new course
var makefunctionablecourseregester = document.getElementById("makeNewCourse");
makefunctionablecourseregester === null || makefunctionablecourseregester === void 0 ? void 0 : makefunctionablecourseregester.addEventListener("click", function (item) {
    var courseid = document.getElementById("courseid");
    var courseidd = courseid.value;
    var coursename = document.getElementById("coursename");
    var coursenamee = coursename.value;
    var regestercourse = new Course(courseidd, coursenamee);
    if (!course1) {
        localStorage.setItem("course1", JSON.stringify(regestercourse));
        console.log(localStorage.getItem("course1"));
    }
    else if (!course2) {
        localStorage.setItem("course2", JSON.stringify(regestercourse));
        console.log(course2);
    }
    else if (!course3) {
        localStorage.setItem("course3", JSON.stringify(regestercourse));
    }
    else if (!course4) {
        localStorage.setItem("course4", JSON.stringify(regestercourse));
    }
    else {
        alert("You Can't create Course");
    }
});
//Regester Student 
var newRegisterStudentName = document.getElementById("newRegisterStudentName");
var newRegisterStudentAge = document.getElementById("newRegisterStudentAge");
var regesterstudentsubmitbrthtml = document.getElementById("regesterstudentsubmitbrthtml");
regesterstudentsubmitbrthtml === null || regesterstudentsubmitbrthtml === void 0 ? void 0 : regesterstudentsubmitbrthtml.addEventListener("click", function (e) {
    var name = newRegisterStudentName === null || newRegisterStudentName === void 0 ? void 0 : newRegisterStudentName.value;
    var age = Number(newRegisterStudentAge === null || newRegisterStudentAge === void 0 ? void 0 : newRegisterStudentAge.value);
    var studenthtml = new Student(name, age);
    var studentsArray = [];
    var previous = localStorage.getItem("storedStudent");
    if (!previous) {
        studentsArray = [studenthtml];
    }
    else {
        var previousData = JSON.parse(localStorage.getItem("storedStudent"));
        studentsArray = __spreadArray(__spreadArray([], previousData, true), [studenthtml], false);
    }
    storeInLocalStorage(studentsArray);
    // assignNameAgeGlobally(name,age);
});
function storeInLocalStorage(data) {
    localStorage.setItem("storedStudent", JSON.stringify(data));
}
// Regester Instructor
var newRegisterInsructorName = document.getElementById("newRegisterInsructorName");
var newRegisterInsructorAge = document.getElementById("newRegisterInsructorAge");
var regesterInstructorsubmitbrthtml = document.getElementById("regesterInstructorsubmitbrthtml");
regesterInstructorsubmitbrthtml === null || regesterInstructorsubmitbrthtml === void 0 ? void 0 : regesterInstructorsubmitbrthtml.addEventListener("click", function (e) {
    var name = newRegisterInsructorName === null || newRegisterInsructorName === void 0 ? void 0 : newRegisterInsructorName.value;
    var age = Number(newRegisterInsructorAge === null || newRegisterInsructorAge === void 0 ? void 0 : newRegisterInsructorAge.value);
    var instructorhtml = new Instructor(name, age, 100);
    var instructorArray = [];
    var previouss = localStorage.getItem("storedInstructor");
    if (!previouss) {
        instructorArray = [instructorhtml];
        console.log(instructorArray);
    }
    else {
        var previousDataa = JSON.parse(localStorage.getItem("storedInstructor"));
        instructorArray = __spreadArray(__spreadArray([], previousDataa, true), [instructorhtml], false);
        console.log(instructorArray);
    }
    storeInLocalStoragee(instructorArray);
});
function storeInLocalStoragee(data) {
    localStorage.setItem("storedInstructor", JSON.stringify(data));
}
var viewavailablecourseshtml = document.getElementById("viewavailablecourseshtml");
viewavailablecourseshtml === null || viewavailablecourseshtml === void 0 ? void 0 : viewavailablecourseshtml.addEventListener("click", function (e) {
    var viewavailablecourseshtmldisable = viewavailablecourseshtml;
    viewavailablecourseshtmldisable.style.display = "none";
    if (course1) {
        var availablecourseshtml1 = document.getElementById("availablecourseshtml1");
        availablecourseshtml1.type = "button";
        availablecourseshtml1.value = course1.name;
    }
    if (course2) {
        var availablecourseshtml2 = document.getElementById("availablecourseshtml2");
        availablecourseshtml2.type = "button";
        availablecourseshtml2.value = course2.name;
    }
    if (course3) {
        var availablecourseshtml3 = document.getElementById("availablecourseshtml3");
        availablecourseshtml3.type = "button";
        availablecourseshtml3.value = course3.name;
    }
    if (course4) {
        var availablecourseshtml4 = document.getElementById("availablecourseshtml4");
        availablecourseshtml4.type = "button";
        availablecourseshtml4.value = course4.name;
    }
    ;
    if (course1 == null && course2 == null && course3 == null && course4 == null) {
        alert("There is no Course available for Admission");
    }
});
// Not Working well
// let navailablecourseshtmlewRegisterStudentName: string = "Abdul-Basit";
// let newRegisterStudentAges: number = 17;
// function assignNameAgeGlobally(nameid,ageid){
//     navailablecourseshtmlewRegisterStudentName = nameid
//     newRegisterStudentAge = ageid
// };
// Registring Student in course gives an error
// document.getElementById("availablecourseshtml1")?.addEventListener("click", (item) => {
//     const regstu = new Student(navailablecourseshtmlewRegisterStudentName, newRegisterStudentAges);
//     let courseArrayDetails = JSON.parse(localStorage.getItem("courseArrayDetail"));
//     let coursArray: Course[] = [];
//     if (courseArrayDetails == null) {
//         console.log(coursArray)
//         if (course1) {
//             course1.addStudent(regstu);
//             coursArray.push(course1);
//             console.log(coursArray)
//             console.log("This is runned")
//         }
//     } else {
//         course1.addStudent(regstu);
//         coursArray = [...courseArrayDetails, course1]
//     }
//     storecoursedetailinloacalstorage(coursArray)
// })
// function storecoursedetailinloacalstorage(data) {
//     localStorage.setItem("courseArrayDetail", JSON.stringify(data));
//     alert("Work Done")
// }
(_a = document.getElementById("makestudentsvisible")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (e) {
    var zerostudents = document.querySelector("#zerostudents");
    zerostudents.style.display = "block";
    var showGettedData = JSON.parse(localStorage.getItem("storedStudent"));
    // showGettedData = showGettedData.toString();
    var num = 0;
    if (showGettedData !== null) {
        showGettedData.forEach(function (item) {
            num = ++num;
            var zeroStudents = zerostudents.insertAdjacentHTML("afterend", "<li>".concat(num, " : {Name : ").concat(item.name, " <br> Age : ").concat(item.age, " }<br><br><br></li>"));
        });
        document.getElementById("makestudentsvisible").style.display = "none";
    }
    else {
        alert("Please Regiter Student First.");
    }
});
(_b = document.getElementById("makeinstructorvisiable")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function (e) {
    var zerostudentsforinstructor = document.querySelector("#zerostudentsforinstructor");
    zerostudentsforinstructor.style.display = "block";
    var showGettedDataa = JSON.parse(localStorage.getItem("storedInstructor"));
    // showGettedData = showGettedData.toString();
    var num = 0;
    if (showGettedDataa !== null) {
        showGettedDataa.forEach(function (item) {
            num = ++num;
            var zeroStudentss = zerostudentsforinstructor.insertAdjacentHTML("afterend", "".concat(num, " : {Name : ").concat(item.name, " <br> Age : ").concat(item.age, " }<br><br><br>"));
        });
        document.getElementById("makeinstructorvisiable").style.display = "none";
    }
    else {
        alert("Please Register the Instructor First.");
    }
});
var department1 = JSON.parse(localStorage.getItem("department1"));
var department2 = JSON.parse(localStorage.getItem("department2"));
var makeadepartment = document.getElementById("makeadepartment");
makeadepartment === null || makeadepartment === void 0 ? void 0 : makeadepartment.addEventListener("click", function (item) {
    var departmentName = document.getElementById("departmentName");
    var departmentNamee = departmentName.value;
    var regesterdepartment = new Department(departmentNamee);
    if (!department1) {
        localStorage.setItem("department1", JSON.stringify(regesterdepartment));
    }
    else if (!department2) {
        localStorage.setItem("department2", JSON.stringify(regesterdepartment));
    }
    else {
        alert("You Can't create Department");
    }
});
if (department1) {
    document.getElementById("department1forinvestigate").innerHTML = department1.name;
}
if (department2) {
    document.getElementById("department2forinvestigate").innerHTML = department2.name;
}
if (course1) {
    document.getElementById("course1forinvestigate").innerHTML = course1.name;
}
else if (!course1) {
    document.getElementById("course1forinvestigate").innerHTML = "Empty";
}
;
if (course2) {
    document.getElementById("course2forinvestigate").innerHTML = course2.name;
}
else if (!course2) {
    document.getElementById("course2forinvestigate").innerHTML = "Empty";
}
;
if (course3) {
    document.getElementById("course3forinvestigate").innerHTML = course3.name;
}
else if (!course3) {
    document.getElementById("course3forinvestigate").innerHTML = "Empty";
}
;
if (course4) {
    document.getElementById("course4forinvestigate").innerHTML = course4.name;
}
else if (!course4) {
    document.getElementById("course4forinvestigate").innerHTML = "Empty";
}
;
// export{}
