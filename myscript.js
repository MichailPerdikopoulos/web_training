
function DisplayUserInputIdea() {
    const input_box = document.getElementById("input-idea")
    const list_ideas = document.getElementById("list-ideas")

    let idea_user = input_box.value;

    if (idea_user === "") return;

    input_box.value = "";

    let new_item = document.createElement("li");
    new_item.appendChild(document.createTextNode(idea_user));
    list_ideas.appendChild(new_item);
}