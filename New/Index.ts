class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    };

    getName() {
        return this.name;
    };
};

class Student extends Person {
    rollNumber: number = 0;
    course: Course[] = [];

    constructor(name: string, age: number) {
        super(name, age);
    };

    regesterForCourse(...Course: Course[]) {
        this.course = this.course.concat(Course);
        Course.forEach(item => this.rollNumber = item.nunberOfStudents)
    };
};

class Instructor extends Person {
    private salary: number;
    course: Course[] = [];

    constructor(name: string, age: number, Salary: number) {
        super(name, age);
        this.salary = Salary;
    };

    assignCourse(...Course: Course[]) {
        this.course = this.course.concat(Course);
    };

    // get salary(){            //It is avail in ECmaScript5
    //     return this._salary;
    // }
    // set salary(newSalary){
    //     this._salary = newSalary
    // }
};

class Course {
    id: string;
    name: string;
    nunberOfStudents: number = 0;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    };

    students: Student[] = [];
    instructors: Instructor[] = [];

    addStudent(...Student: Student[]) {
        this.nunberOfStudents = ++this.nunberOfStudents;
        this.students = this.students.concat(Student);
        Student.forEach(item => item.regesterForCourse(this));
    };

    setInstructor(...Instructor: Instructor[]) {
        this.instructors = this.instructors.concat(Instructor);
        Instructor.forEach(item => item.assignCourse(this));
    }
};

class Department {
    name: string;
    courses: Course[] = [];

    constructor(name: string) {
        this.name = name;
    };

    addCourse(...course: Course[]) {
        this.courses = this.courses.concat(course);
    };
}



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

let course1: Course = JSON.parse(localStorage.getItem("course1"));
let course2: Course = JSON.parse(localStorage.getItem("course2"));
let course3: Course = JSON.parse(localStorage.getItem("course4"));
let course4: Course = JSON.parse(localStorage.getItem("course3"));

// create new course

let makefunctionablecourseregester = document.getElementById("makeNewCourse");
makefunctionablecourseregester?.addEventListener("click", (item) => {
    let courseid = document.getElementById("courseid") as HTMLInputElement;
    let courseidd = courseid.value;
    let coursename = document.getElementById("coursename") as HTMLInputElement;
    let coursenamee = coursename.value
    let regestercourse = new Course(courseidd, coursenamee)
    if (!course1) {
        localStorage.setItem("course1", JSON.stringify(regestercourse))
        console.log(localStorage.getItem("course1"))
    }
    else if (!course2) {
        localStorage.setItem("course2", JSON.stringify(regestercourse));
        console.log(course2);
    } else if (!course3) {
        localStorage.setItem("course3", JSON.stringify(regestercourse))
    } else if (!course4) {
        localStorage.setItem("course4", JSON.stringify(regestercourse))
    } else {
        alert("You Can't create Course")
    }
})


//Regester Student 
let newRegisterStudentName = document.getElementById("newRegisterStudentName") as HTMLInputElement;
let newRegisterStudentAge = document.getElementById("newRegisterStudentAge") as HTMLInputElement;
let regesterstudentsubmitbrthtml = document.getElementById("regesterstudentsubmitbrthtml");


regesterstudentsubmitbrthtml?.addEventListener("click", (e) => {
    let name: string = newRegisterStudentName?.value;

    let age: number = Number(newRegisterStudentAge?.value);
    
    let studenthtml = new Student(name, age);

    let studentsArray: Student[] = [];
    let previous = localStorage.getItem("storedStudent");
    if (!previous) {
        studentsArray = [studenthtml];

    } else {
        const previousData: Student[] = JSON.parse(localStorage.getItem("storedStudent"));
        studentsArray = [...previousData, studenthtml]

    }
    storeInLocalStorage(studentsArray);
    // assignNameAgeGlobally(name,age);
});

function storeInLocalStorage(data: Student[]) {
    localStorage.setItem("storedStudent", JSON.stringify(data))
}



// Regester Instructor

let newRegisterInsructorName = document.getElementById("newRegisterInsructorName") as HTMLInputElement;
let newRegisterInsructorAge = document.getElementById("newRegisterInsructorAge") as HTMLInputElement;
let regesterInstructorsubmitbrthtml = document.getElementById("regesterInstructorsubmitbrthtml");


regesterInstructorsubmitbrthtml?.addEventListener("click", (e) => {
    let name: string = newRegisterInsructorName?.value;

    let age: number = Number(newRegisterInsructorAge?.value);
    
    let instructorhtml = new Instructor(name, age, 100);
    
    let instructorArray: Instructor[] = [];
    let previouss = localStorage.getItem("storedInstructor");
    if (!previouss) {
        instructorArray = [instructorhtml];
        console.log(instructorArray)
    } else {
        const previousDataa: Instructor[] = JSON.parse(localStorage.getItem("storedInstructor"));
        instructorArray = [...previousDataa, instructorhtml]
        console.log(instructorArray)
        
    }
    storeInLocalStoragee(instructorArray);
});

function storeInLocalStoragee(data: Instructor[]) {
    localStorage.setItem("storedInstructor", JSON.stringify(data))
}



let viewavailablecourseshtml = document.getElementById("viewavailablecourseshtml");
viewavailablecourseshtml?.addEventListener("click", (e) => {
    let viewavailablecourseshtmldisable = viewavailablecourseshtml as HTMLInputElement;
    viewavailablecourseshtmldisable.style.display = "none";
    if (course1) {
        let availablecourseshtml1 = document.getElementById("availablecourseshtml1") as HTMLInputElement;
        availablecourseshtml1.type = "button";
        availablecourseshtml1.value = course1.name;
    }
    if (course2) {
        let availablecourseshtml2 = document.getElementById("availablecourseshtml2") as HTMLInputElement;
        availablecourseshtml2.type = "button";
        availablecourseshtml2.value = course2.name
    }
    if (course3) {
        let availablecourseshtml3 = document.getElementById("availablecourseshtml3") as HTMLInputElement;
        availablecourseshtml3.type = "button";
        availablecourseshtml3.value = course3.name
    }
    if (course4) {
        let availablecourseshtml4 = document.getElementById("availablecourseshtml4") as HTMLInputElement;
        availablecourseshtml4.type = "button";
        availablecourseshtml4.value = course4.name
    };
    if (course1 == null && course2 == null && course3 == null && course4 == null) {
        alert("There is no Course available for Admission")
    }
    
})



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

document.getElementById("makestudentsvisible")?.addEventListener("click", (e) => {
    let zerostudents = document.querySelector("#zerostudents");
    (zerostudents as HTMLElement).style.display = "block"
    let showGettedData = JSON.parse(localStorage.getItem("storedStudent"));
    // showGettedData = showGettedData.toString();
    let num: number = 0;
    if (showGettedData !== null) {
        showGettedData.forEach(item => {
            num = ++num;
            let zeroStudents = zerostudents.insertAdjacentHTML("afterend", `<li>${num} : {Name : ${item.name} <br> Age : ${item.age} }<br><br><br></li>`);
        });

        document.getElementById("makestudentsvisible").style.display = "none"
    } else {
        alert("Please Regiter Student First.")
    }
})



document.getElementById("makeinstructorvisiable")?.addEventListener("click", (e) => {
    let zerostudentsforinstructor = document.querySelector("#zerostudentsforinstructor");
    (zerostudentsforinstructor as HTMLElement).style.display = "block"
    let showGettedDataa = JSON.parse(localStorage.getItem("storedInstructor"));
    // showGettedData = showGettedData.toString();
    let num: number = 0;
    if (showGettedDataa !== null) {
        showGettedDataa.forEach(item => {
            num = ++num;
            let zeroStudentss = zerostudentsforinstructor.insertAdjacentHTML("afterend", `${num} : {Name : ${item.name} <br> Age : ${item.age} }<br><br><br>`);
        });
        
        document.getElementById("makeinstructorvisiable").style.display = "none";
    } else {
        alert("Please Register the Instructor First.")
    }
})





let department1: Department = JSON.parse(localStorage.getItem("department1"));
let department2: Department = JSON.parse(localStorage.getItem("department2"));

let makeadepartment = document.getElementById("makeadepartment");
makeadepartment?.addEventListener("click", (item) => {
    let departmentName = document.getElementById("departmentName") as HTMLInputElement;
    let departmentNamee = departmentName.value;
    let regesterdepartment = new Department(departmentNamee)
    if (!department1) {
        localStorage.setItem("department1", JSON.stringify(regesterdepartment))
    }
    else if (!department2) {
        localStorage.setItem("department2", JSON.stringify(regesterdepartment));
    } else {
        alert("You Can't create Department");
    }
})


if(department1){
    document.getElementById("department1forinvestigate").innerHTML = department1.name;
}
if(department2){
    document.getElementById("department2forinvestigate").innerHTML = department2.name;
}





if (course1) {
    document.getElementById("course1forinvestigate").innerHTML = course1.name;
} else if (!course1) {
    document.getElementById("course1forinvestigate").innerHTML = "Empty";
};

if (course2) {
    document.getElementById("course2forinvestigate").innerHTML = course2.name;
} else if (!course2) {
    document.getElementById("course2forinvestigate").innerHTML = "Empty";
};

if (course3) {
    document.getElementById("course3forinvestigate").innerHTML = course3.name;
} else if (!course3) {
    document.getElementById("course3forinvestigate").innerHTML = "Empty";
};
if (course4) {
    document.getElementById("course4forinvestigate").innerHTML = course4.name;
} else if (!course4) {
    document.getElementById("course4forinvestigate").innerHTML = "Empty";
};





// export{}