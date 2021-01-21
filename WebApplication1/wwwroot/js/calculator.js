var grades = document.getElementById("grades");

grades.addEventListener("click", function () {
    var finalGrade = (document.getElementById("assignments").value * .5
        + document.getElementById("project").value * .1
        + document.getElementById("quizzes").value * .1
        + document.getElementById("exam").value * .2
        + document.getElementById("intex").value * .1);
    var letterGrade;
    switch (true) {
        case (finalGrade >= 94): letterGrade = "A";
            break;
        case (finalGrade >= 90): letterGrade = "A-";
            break;
        case (finalGrade >= 87): letterGrade = "B+";
            break;
        case (finalGrade >= 84): letterGrade = "B";
            break;
        case (finalGrade >= 80): letterGrade = "B-";
            break;
        case (finalGrade >= 77): letterGrade = "C+";
            break;
        case (finalGrade >= 74): letterGrade = "C";
            break;
        case (finalGrade >= 70): letterGrade = "C-";
            break;
        case (finalGrade >= 67): letterGrade = "D+";
            break;
        case (finalGrade >= 64): letterGrade = "D";
            break;
        case (finalGrade >= 60): letterGrade = "D-";
            break;
        case (finalGrade < 60): letterGrade = "E";
            break;
    }
    alert("Final Grade: " + finalGrade + "\n" + "Letter Grade: " + letterGrade);
});