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
        });

        // DRAGLEAVE

        list.addEventListener('dragleave', function (e) {
            e.preventDefault();

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
    event.preventDefault(); //prevent the form from autosubmitting
    todoboxdiv.style.display = "none";

    // save the form in an object array
    // retrieve the form

    let allToDo = [];

    let itemInfo = document.querySelector("#todo");
    let itemInfoDes = document.querySelector("#description");
    let itemInfoDay = document.querySelector("#days");

    let firstInput = itemInfo.value;
    let secondInput = itemInfoDes.value;
    let thirdInput = itemInfoDay.value;

    console.log(`${firstInput}`);

    let todoObj = {
        todo : firstInput,
        description : secondInput,
        days : thirdInput
    };

    console.log(todoObj);

    allToDo.push(todoObj);

    console.log(allToDo);
    /*
    create a div
    append it
    */
})

// to create a new div of list item array

let submitForm = document.getElementById("todoform");

submitForm.addEventListener("submit", function() {

let newDiv = document.createElement("div");

newDiv.setAttribute('draggable', 'true')
newDiv.classList.add('list-item');
newDiv.innerHTML = "list-item2"

let day = document.getElementById("list");
day.appendChild(newDiv);


})

/*

let submitForm = document.getElementById("todoform");

submitForm.addEventListener("submit", function() {
let newNewNewDiv = document.getElementById("lists");
let newNewDiv = document.getElementById("monday");
let newDiv = document.createElement("list-item");
newNewDiv.appendChild(newDiv);

}) 

/*

let day = document.getElementById("list");
let bigbox = document.getElementById("lists");
day.appendChild(newDiv);
newDiv.appendChild(list);

}) 

/*

let submitForm = document.getElementById("todoform");

submitForm.addEventListener("submit", function() {
let newDiv = document.createElement("div");
let day = document.getElementById("monday");
day.appendChild(newDiv);
newDiv.appendChild()

}) 

// console.log(document.getElementById("monday"));

//
/*
day.style.display = "block";


/*

let submittButton = document.getElementById("submit");

submittButton.addEventListener("click", function() {
document.createElement("div");


}) 

let allList = document.getElementById("monday")
allList.appendChild("div");


/*

let submittButton = document.getElementById("submit");
submittButton.addEventListener("click" function() {
    let newDiv = document.createElement("div");
})


let submittButton = document.getElementById("submit");
submittButton.addEventListener("click", createElement("div");
console.log(submittButton);


todoform.addEventListener("submit", createElement("div"));
/*
todoform.addEventListener("submit", function() {
    todoform.createElement("div");
    
})
console.log(todoform);


/*
todoform.addEventListener("click", function() {
    todoform.style.display = "block";
});
/*

let addListItemDiv = document.getElementById("list");
let addListItem = document.createElement("list-item");

/*

let submitButton = document.querySelector("#submit");
let addListItem = document.createElement("list-item");

let addListItemDiv = document.getElementById("list");

todoform.addEventListener("submit", function(event) {
    event.preventDefault ();
    let addListItem = document.createElement("list-item");
    addListItemDiv.appendChild(addListItem);
    addListItem.style.display = "block";

})

console.log(addListItemDiv);


/*

let addListItem = document.createElement("list-item");
let submitButton = document.querySelector("#submit");


let addListItemDiv = document.getElementById("list");
addListItemDiv.appendChild(addListItem);
console.log(addListItemDiv);

/*

let addListItem = document.querySelector("#list-item");
let addToDragzone = document.getElementById("list");
let addListBox = document.getElementsByClassName("lists");

let submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", function() {
    addToDragzone.createElement("list-item");


});

console.log(submitButton);


/*

document.div.appendChild(addToDragzone);
addToDragzone.textContent = "I need to wake up early";

let addTodo = document.createElement("list-item");
document.body.appendChild(addTodo);
console.log(addTodo);


todoform.addEventListener("submit" function() {
    addTodo.createElement("list-item");
    console.log(addTodo);
})


/*
let addTodo = document.createElement("list-item");
addTodo.addEventListener("click" function handleClick(event) {
    console.log("element clicked", event);
})


let addTodo = document.createElement("list-item");
document.body.appendChild(addTodo);

let submitTodo = document.getElementById("submit");
    submitTodo.addEventListener("submit", function() {

});



/*

let submitButton = document.querySelector("#submit");
let addListItem = document.querySelector("#list-item");
let addListBox = document.getElementsByClassName("lists");


let divItem = document.createElement("div");
console.log(divItem);

addListItem.appendChild(addListBox);
document.body.appendChild(addListItem);
console.log(addListItem);

/*

let submitButton = document.querySelector("#submit");
let addListitem = document.querySelector("list-item");

submitButton.addEventListener("click", function () {

})



/*

let submitButton = document.querySelector("submit");
submitButton.addEventListener("click", function() {
    submitButton.createElement("list-item");
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
