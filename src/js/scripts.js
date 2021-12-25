// eslint-disable-next-line no-unused-vars
function newItem() {

  // Add new item to list via text input / Add button
  let li = $('<li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert('Please enter some text');
  } else {
    $('#list').append(li);
  }

  // Cross out item from list via double-click
  li.on('dblclick', function() {
    li.toggleClass('strike');
  });

  // Remove item from list via Delete button (X)
  let deleteButton = $('<deleteButton>');
  deleteButton.append(document.createTextNode('X'));
  li.append(deleteButton);
  deleteButton.on('click', function() {
    li.addClass('delete');
  });
}

// Reorder items in list via click & drag up/down
$('#list').sortable();
