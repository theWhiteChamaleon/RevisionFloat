require.config({
    paths: {
        bootstrapCss: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min', // Path for Tabulator CSS
        
    }
});

define("EmersonTest/components/tableToolbar", ["DS/DataDragAndDrop/DataDragAndDrop", "DS/WAFData/WAFData","EmersonTest/components/table","css!EmersonTest/styles/revstyles.css","css!bootstrapCss"], function (DataDragAndDrop, WAFData, customTable) {

    var tableToolbar = {
        showToolbar: function (tableData) {
            
            data = [
                { buttonLabel: "Select all", onClick: tableToolbar.selectAll(tableData) },
                { buttonLabel: "De-Select all", onClick: tableToolbar.deselectAll(tableData) },
                { buttonLabel: "Select items in my Collaborative Space", onClick: tableToolbar.selectMyCollbSpaceObjs }
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
            
        },selectAll: function () {
            widget.whereUsedTable.tableData.selectRow();
        },deselectAll: function (tableData) {
            widget.whereUsedTable.tableData.selectRow();
        },selectMyCollbSpaceObjs: function (tableData) {
            
        }
    }
    widget.tableToolbar = tableToolbar;
    return tableToolbar;



});
