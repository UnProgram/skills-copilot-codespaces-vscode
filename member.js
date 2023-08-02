function skillsMember() {
    var skills = document.getElementById("skills");
    var member = document.getElementById("member");
    var skillsMember = document.getElementById("skillsMember");
    var skillsMemberValue = skillsMember.options[skillsMember.selectedIndex].value;
    if (skillsMemberValue == "yes") {
        skills.style.display = "block";
        member.style.display = "block";
    } else {
        skills.style.display = "none";
        member.style.display = "none";
    }
}