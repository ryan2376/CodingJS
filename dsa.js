const students = ['Pesh', 'Allan', 'Nkiro', 'Ryan', 'Max']

const findStudent = (students, studentName) => {

    for(let studentList of students)

        if(studentName === studentList){
        console.log(`User ${studentName} found`)
        }
        

}

findStudent(students,'Ryan')

