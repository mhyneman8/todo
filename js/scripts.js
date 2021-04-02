
  let addButton = document.createElement('button');
  addButton.classList.add('button');
  addButton.innerText = 'Add New List';
  addButton.addEventListener('click', function() {
    let list = $('<div class="container"><h2 class="title">New List</h2></div>');
    $('body').append(list);
    newList();

    document.body.appendChild(list);
  });
  document.body.appendChild(addButton);


$('.container').draggable();



function newItem(){

//javascript
//1. Adding a new item to the list of items:
   let li = $('<li></li>');
   let inputValue = $('input').val();
   li.append(inputValue);

   if (inputValue === '') {
     alert("You must write something!");
   } else {
     $('#list').append(li);
   }

   e.preventDefault();

   if (event.key === 13) {
     if (inputValue === '') {
       alert("You must write something!");
     } else{
        $('#list').append(li);
     }
   }

 //2. Crossing out an item from the list of items:
   function crossOut() {
 		li.toggleClass("strike");
 	}

  li.on('dblclick', crossOut);


 //3(i). Adding the delete button "X":
   let crossOutButton = $("<crossOutButton></crossOutButton>");
 	crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);

  crossOutButton.on('click', deleteListItem);


 //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
   function deleteListItem(){
 		li.addClass("delete");
 	}
 // 4. Reordering the items:
   $('#list').sortable();

}






// If you get stuck, you can look below for the jQuery code. However, try yourself to convert the vanilla JS code provided to jQuery first.








  /*
// jQuery Code
//1. Adding a new item to the list:

  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }
//2. Crossing an item out:
  function crossOut() {
		li.toggleClass("strike");
	}

	li.on("dblclick", function crossOut() {
		li.toggleClass("strike");
	});
//3. Adding a delete button
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

//   crossOutButton.on("click", deleteListItem);
//   function deleteListItem(){
// 		li.addClass("delete")
// 	}
   $('#list').sortable();
*/
