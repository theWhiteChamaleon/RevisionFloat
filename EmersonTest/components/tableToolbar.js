require.config({
    paths: {
        bootstrapCss: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min', // Path for Tabulator CSS
        
    }
});

define("EmersonTest/components/tableToolbar", ["DS/DataDragAndDrop/DataDragAndDrop", "DS/WAFData/WAFData","css!EmersonTest/styles/revstyles.css","css!bootstrapCss"], function (DataDragAndDrop, WAFData) {

    var tableToolbar = {
        showToolbar: function (data) {
            
            data = [{buttonLabel:"Replace in All"},{buttonLabel:"Replace in selected"}, {buttonLabel:"Replace in my Collaborative Space"}]
            var toobarHTML = '';
            data.forEach(button => {
                toobarHTML += `<button class="btn btn-primary">${button.buttonLabel}</button>`;
            });
           

            var tableToobarDiv = document.createElement('div');
            tableToobarDiv.id = "tableToobarDiv";
            tableToobarDiv.className = "tableToobarDiv";
            tableToobarDiv.innerHTML = toobarHTML;
            
            var tableElement = document.getElementById("example-table");
            var parentElement = tableElement.parentNode;

            // Insert the new element before the reference element
            parentElement.insertBefore(tableToobarDiv, tableElement);
            
        }
    }
    widget.tableToolbar = tableToolbar;
    return tableToolbar;



});
