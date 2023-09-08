//Display Class Data Using Advanced Feature of typescript

export class Student{
    studentId:number;
    studentName:string;
    studentAge:string;

    constructor(studentId:number,studentName:string,studentAge:string){

        this.studentId=studentId;
        this.studentName=studentName;
        this.studentAge=studentAge

    }
       

    public display(){
        console.log(`
            Student Id            ::${this.studentId}
            Student Name          ::${this.studentName}
            Student Age           ::${this.studentAge}
        `)
    }

}


export function displaySchoolDetails(){
    console.log("School time is 8 AM")
    
}
