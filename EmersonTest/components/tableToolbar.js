require.config({
    paths: {
        bootstrapCss: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min', // Path for Tabulator CSS
        
    }
});

define("EmersonTest/components/tableToolbar", ["DS/DataDragAndDrop/DataDragAndDrop", "DS/WAFData/WAFData","css!EmersonTest/styles/revstyles.css","css!bootstrapCss"], function (DataDragAndDrop, WAFData) {

    var tableToolbar = {
        showToolbar: function (data) {
            
            data = [
                { buttonLabel: "Replace in All", onClick: function() { alert('Action Initiated, You will be notified on completion'); } },
                { buttonLabel: "Replace in Selected", onClick: function() { alert('Action Initiated, You will be notified on completion'); } },
                { buttonLabel: "Replace in My Collaborative Space", onClick: function() { alert('Action Initiated, You will be notified on completion'); } }
            ];



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

            // Add onclick event listeners to the buttons
            var buttons = tableToolbarDiv.getElementsByTagName('button');
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].onclick = data[i].onClick;
            }
            
        }
    }
    widget.tableToolbar = tableToolbar;
    return tableToolbar;



});
