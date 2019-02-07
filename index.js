$( document ).ready(function() {
    //jQuery call for listent for every click of the submit button
        $('#js-shopping-list-form').submit(event => {
    //Stops any default functions preformed by the form element
            event.preventDefault();
    //Creates a variable to hold the input item
            const entry = $(this).find(
                'input[name="shopping-list-entry"]').val();
    //Creats a variable to hold the new items div
            const addItem = [];
    //If Statment that adds the new item only if input is something
            if (entry == '') {
                alert ("Must be a valid shopping item.");
                return false;
            }
            else {
                addItem.push($(
                    `<li> 
                    <span class='shopping-item'>${entry}</span>
                    <div class="shopping-item-controls">
                    <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                    </button>
                    <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                    </button>
                    </div>
                    </li>`    
                ));
            }
    //Updates the DOM with new item
            $("ul").append(addItem);
    //Resets the input box to clear
            $('input[type="text"], textarea').val('');
        });
    //When the checked button is clicked, it toggels between checked and unchecked
        $('.shopping-list').on('click', '.shopping-item-toggle', function(){
            $(this).closest('li').children().first().toggleClass("shopping-item__checked");
        });
    //When the delete button is clicked, it removes the item
        $('.shopping-list').on('click', '.shopping-item-delete',function(){
            $(this).closest('li').remove();
        })  
    });
    
    