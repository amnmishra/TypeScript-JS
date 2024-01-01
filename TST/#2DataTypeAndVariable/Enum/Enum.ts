/* 
    Enum is a special Datatype they represent group of constant.(Unchange able)
    Enums come with two dataType
        String
        Numeric
        HETEROGENEOUS
*/
// enum PrintMedia{
//     Newspaper,
//     Newsletter,
//     Magazine,
//     Book
// }


// Numeric
enum PrintMedia{
    Newspaper=1,
    Newsletter = getPrintMediaCode('newsletter'),
    Magazine = Newsletter*3,
    Book=10
}
function getPrintMediaCode(mediaName:string):number{
    if(mediaName == 'newsletter'){
        return 5;
    }
}
console.log(PrintMedia.Newsletter);
console.log(PrintMedia.Magazine);


// String

enum PrintMedia{
    fname = 'Aman',
    lname = 'Mishra'
}
console.log(PrintMedia.fname,PrintMedia.lname);



// Heterogeneous Enum

// It's contain both datatype String and Number

enum Status {
    Active = 'ACTIVE',
    Deactivate = 1,
    Pending
}
console.log(Status.Active,Status.Deactivate);
