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
var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 1] = "Newspaper";
    PrintMedia[PrintMedia["Newsletter"] = getPrintMediaCode('newsletter')] = "Newsletter";
    PrintMedia[PrintMedia["Magazine"] = PrintMedia.Newsletter * 3] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 10] = "Book";
})(PrintMedia || (PrintMedia = {}));
function getPrintMediaCode(mediaName) {
    if (mediaName == 'newsletter') {
        return 5;
    }
}
console.log(PrintMedia.Newsletter);
console.log(PrintMedia.Magazine);
// String
(function (PrintMedia) {
    PrintMedia["fname"] = "Aman";
    PrintMedia["lname"] = "Mishra";
})(PrintMedia || (PrintMedia = {}));
console.log(PrintMedia.fname, PrintMedia.lname);
// Heterogeneous Enum
// It's contain both datatype String and Number
var Status;
(function (Status) {
    Status["Active"] = "ACTIVE";
    Status[Status["Deactivate"] = 1] = "Deactivate";
    Status[Status["Pending"] = 2] = "Pending";
})(Status || (Status = {}));
console.log(Status.Active, Status.Deactivate);
