const school = {
    teachers: [
        {
            id: 1,
            name: "Pinchas",
            subjects: ["chemistry", "biology", "physics"],
            students: [],
            capacityLeft: 3,
        },
        {
            id: 2,
            name: "Williams",
            subjects: ["history", "ethics"],
            students: [],
            capacityLeft: 2,
        },
    ],
    students: [
        {
            id: 10,
            name: "Jennifer",
            age: 20,
        },
        {
            id: 11,
            name: "Howard",
            age: 23,
        },
        {
            id: 12,
            name: "Old-Timmy",
            age: 86,
        },
        {
            id:13,
            name: "Houston",
            age: 21,
        },
    ],
    findPerson: function(type, id) {
        if(type === 'student')
            return this.students.filter(person => person.id === id)[0];
        else if(type === 'teacher')
            return this.teachers.filter(person => person.id === id)[0];
    },
    assignStudent: function(id, subject) {
        const fittingTeacher = this.teachers.filter(teacher => teacher.subjects.includes(subject) && teacher.capacityLeft > 0)[0];
        const student = this.findPerson("student", id);

        if(fittingTeacher && student){
            const fittingTeacherIndex = this.teachers.indexOf(fittingTeacher);
            this.teachers[fittingTeacherIndex].students.push(student);
            this.teachers[fittingTeacherIndex].capacityLeft--;
        }
        else {
            console.log("Sorry, no available teachers left.")
        }
    },
    assignTeachersSubject: function(id, subject) {
        const fittingTeacher = this.teachers.find(teacher => teacher.id === id);
        if(fittingTeacher){
            if(!fittingTeacher.subjects.includes(subject))
                fittingTeacher.subjects.push(subject);
            else
                console.log(`${fittingTeacher.name} already have this course`);
        }
        else
            console.log("Sorry, no available teachers.");

    }

};


// console.log(school.findPerson('teacher', 1));
// console.log(school.findPerson('student', 10));

school.assignStudent(10, "chemistry");

school.assignTeachersSubject(1, "history");
school.assignTeachersSubject(1, "biology");
school.assignTeachersSubject(4, "biology");

console.log(school.teachers);