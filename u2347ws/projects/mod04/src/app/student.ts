export class Student {
    Id: number = 0;
    Name: string = "";
    Birthday: Date = new Date();
}

export const students: Student[] = [
    { Id: 101, Name: "Mary", "Birthday": new Date(2007, 0, 15)},
    { Id: 102, Name: "Lisa", "Birthday": new Date(1997, 5, 15)},
    { Id: 103, Name: "Andy", "Birthday": new Date(2003, 8, 15)},
    { Id: 104, Name: "Jenny", "Birthday": new Date(2008, 9, 15)},
    { Id: 105, Name: "KiKi", "Birthday": new Date(2001, 4, 15)},
    { Id: 106, Name: "IU", "Birthday": new Date(2001, 11, 15)},
]
