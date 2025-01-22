const sumbit = document.getElementById("btn");
const h3 = document.getElementById("h3");

sumbit.onclick = function () {
    // Fetch and convert the input value to a number inside the event handler
    let score = Number(document.getElementById("no").value);
    let grade;

    switch (true) {
        case score >= 90:
            grade = "A";
            break;
        case score >= 80:
            grade = "B";
            break;
        case score >= 70:
            grade = "C";
            break;
        case score >= 60:
            grade = "D";
            break;
        default:
            grade = "F";
    }

    h3.textContent = grade;
};
