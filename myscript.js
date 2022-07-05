FillListsFromLocalStorage();
TriggerStoreItemWithEnterInInput();

function GetUserInput(){
    const list_to_update = event.target.parentElement.parentElement.id;
    let user_input_box;
    let list_with_bullets;

    let input_id;
    let ul_id;

    if (list_to_update === "ideas-to-check"){
        input_id = "input-idea";
        ul_id = "ideas-list";
    } else if (list_to_update === "questions-to-ask"){
        input_id = "input-question";
        ul_id = "questions-list";        
    }

    user_input_box = document.getElementById(input_id);

    let input_text = user_input_box.value;

    if (input_text === "") return;

    list_with_bullets = document.getElementById(ul_id);

    AddItemToList(input_text, list_with_bullets);

    user_input_box.value = "";

    // Store item to the local storage
    StoreItemToLocalStorage(input_text, ul_id);
}


function AddItemToList(item, list_store){
    let new_item = document.createElement("li");
    
    new_item.appendChild(document.createTextNode(item));
    list_store.appendChild(new_item);
}

function StoreItemToLocalStorage(item, list_id){
    const currentDatetime = new Date().toLocaleString();
    let key_item = list_id + "_date_" + currentDatetime;

    localStorage.setItem(key_item, item);
}

function FillListsFromLocalStorage(){
    if (localStorage.length === 0) return;

    let key_local, key_item, value_item;
    let ul_list;

    for (let localItemIndex = 0; localItemIndex < localStorage.length; localItemIndex++){
        key_local = localStorage.key(localItemIndex);

        key_item = key_local.substring(0, key_local.indexOf("_date_"));
        value_item = localStorage.getItem(key_local);

        ul_list = document.getElementById(key_item);

        AddItemToList(value_item, ul_list);
    }
}

function TriggerStoreItemWithEnterInInput(){
    var input_box_ideas = document.getElementById("input-idea");
    AddEventWithEnterStoreInput(input_box_ideas);

    var input_box_ideas = document.getElementById("input-question");
    AddEventWithEnterStoreInput(input_box_ideas);
}

function AddEventWithEnterStoreInput(ipnut_box){
    ipnut_box.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {GetUserInput();}
    });
}