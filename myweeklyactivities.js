let listitems = document.querySelectorAll(".list-item");
let lists = document.querySelectorAll(".list");


let draggedItem = null; // there is no item to be dragged currently

// loop for all list items

for (let i = 0; i < listitems.length; i++) {
    let item = listitems[i];

    // DRAGSTART // item - to be able to be dragged
    item.addEventListener("dragstart", function () {
        draggedItem = item;
        setTimeout(function () {
            item.style.display = 'none';
        }, 0)
    });

    // DRAGEND // 
    item.addEventListener('dragend', function () {
        setTimeout(function () {
            draggedItem.style.display = 'block';
            draggedItem = null;
        }, 0)
    });

    



    for (let j = 0; j < lists.length; j++) {
        let list = lists[j];

        // DRAGOVER

        list.addEventListener('dragover', function (e) {
            e.preventDefault();
        });

        // DRAGENTER

        list.addEventListener('dragenter', function (e) {
            e.preventDefault();
            list.style.backgroundColour = 'rgba(0, 0, 0, 0.2)';
        });

        // DRAGLEAVE

        list.addEventListener('dragleave', function (e) {
            e.preventDefault();
            list.style.backgroundColour = 'rgba(0, 0, 0, 0.1)';

        });

        // DROP

        list.addEventListener('drop', function (e) {
            list.append(draggedItem);
        });


    }


}


// ADD ITEM button

// form is open, but still empty
let addItemButton = document.querySelector("#additem");
let todoboxdiv = document.querySelector("#todobox")
console.log(addItemButton);
addItemButton.addEventListener("click", function() {
    todoboxdiv.style.display = "block";
});


// FORM

// form is filled, click submit, form disappear

let todoform = document.getElementById("todoform");
todoform.addEventListener("submit", function(event) {
    event.preventDefault (); //prevent the form from autosubmitting
    todoboxdiv.style.display = "none";
    
})

todoform.addEventListener("click", function() {
    todoform.style.display = "block";

});
/*

let todoform = document.getElementById("todoform");
todoform.addEventListener("submit", function(event) {
    
})

/*
let e = document.createElement("list-item");



/*
let list = document.createElement("list-item");


/*

function addList(){
    let list = document.createElement("list-item");
    list.appendChild();
}

// submit and createlist

/*
todoform.addEventListener("submit", function() {
    let todoform.createElement(".list-item")
    
})

let createlist = document.createElement(".list-item") 

createlist.addEventListener("submit", function() {
    let createlist = document.createElement("list-item");
})

*/
