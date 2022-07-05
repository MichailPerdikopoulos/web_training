
function DisplayUserInputIdea() {
    const input_box = document.getElementById("input-idea")
    const list_ideas = document.getElementById("list-ideas")

    let idea_user = input_box.value;

    if (idea_user === "") return;
    if(list_ideas.childElementCount > 50) return;
    console.log(list_ideas.childElementCount);

    input_box.value = "";

    let new_item = document.createElement("li");
    new_item.appendChild(document.createTextNode(idea_user));
    list_ideas.appendChild(new_item);
}