document.addEventListener('DOMContentLoaded', function(){

    var input = document.getElementById('highlight-option');

    // set the initial state of the checkbox
    chrome.storage.sync.get("highlightEnabled", function(data){
        if (data["highlightEnabled"]){
            input.checked = true;
        } else {
            input.checked = false;
        }
    });

    input.addEventListener("change", function(){
        chrome.storage.sync.set({highlightEnabled: input.checked});
    });


});