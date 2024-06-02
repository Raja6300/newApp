function search_bar() {
    // Get the value of the input field
    let input = document.getElementById('searchbar').value.toLowerCase();
    // Get all the containers
    let containers = document.getElementsByClassName('container');

    // Loop through all containers, and hide those who don't match the search query
    for (let i = 0; i < containers.length; i++) {
        let itemName = containers[i].getElementsByClassName('itemName')[0];
        if (itemName.innerHTML.toLowerCase().indexOf(input) > -1) {
            containers[i].style.display = '';
        } else {
            containers[i].style.display = 'none';
        }
    }
}
