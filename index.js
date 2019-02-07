$(function() {
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        const entry = $(this).find(
            'input[name="shopping-list-entry"]').val();
        const addItem = [];
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
        $("ul").append(addItem);
        $('input[type="text"], textarea').val('');
    });
    $('.shopping-list').on('click', '.shopping-item-toggle', function(){
        $(this).closest('li').children().first().toggleClass("shopping-item__checked");
    });
    $('.shopping-list').on('click', '.shopping-item-delete',function(){
        $(this).closest('li').remove();
    })  
});





