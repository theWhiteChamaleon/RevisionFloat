require.config({
    paths: {
        // Define the path for Tabulator (already included in HTML via CDN)
        tabulator: 'https://unpkg.com/tabulator-tables@6.3.0/dist/js/tabulator.min'
    },
    shim: {
        // Make Tabulator available globally to RequireJS
        tabulator: {
            exports: 'Tabulator'
        }
    }
});

define("EmersonTest/components/table", ["DS/DataDragAndDrop/DataDragAndDrop", "DS/WAFData/WAFData","tabulator","css!EmersonTest/styles/revstyles.css"], function (DataDragAndDrop, WAFData,Tabulator) {

    var whereUsedTable = {
        showTable: function (data) {
           
           
        // Create Tabulator table
        var tableDiv = document.createElement('div');
        tableDiv.id = "example-table";
        widget.body.appendChild(tableDiv);

        var table = new Tabulator("#example-table", {
            data: data, // Assign data to table
            autoColumns: true, // Create columns from data keys
            layout: "fitColumns", // Fit columns to width of table
            movableColumns: true, // Allow column order to be changed
            selectable: true, // Enable row selection
            columns: [
            {formatter: "rowSelection", titleFormatter: "rowSelection", hozAlign: "center", headerSort: false, cellClick: function(e, cell){
                cell.getRow().toggleSelect();
            }, width: 50}, // Checkbox column with specified width
            // Additional columns can be defined here if needed
            ],
            pagination: "local", // Enable local pagination
            paginationSize: 10, // Number of rows per page
            paginationSizeSelector: [10, 20, 30, 40], // Page size options
            initialSort: [ // Define initial sort order
            {column: "name", dir: "asc"} // Sort by "name" column in ascending order
            ],
            headerFilterPlaceholder: "Search...", // Placeholder for search input
            headerFilterLiveFilter: true, // Enable live filtering
        });

        // Add select all and deselect all buttons
        var selectAllButton = document.createElement('button');
        selectAllButton.innerHTML = "Select All";
        selectAllButton.onclick = function() {
            table.selectRow();
        };
        widget.body.appendChild(selectAllButton);

        var deselectAllButton = document.createElement('button');
        deselectAllButton.innerHTML = "Deselect All";
        deselectAllButton.onclick = function() {
            table.deselectRow();
        };
        widget.body.appendChild(deselectAllButton);

        // Make table horizontally scrollable
        tableDiv.style.overflowX = "auto";

       

        
           
        }
    }
    widget.whereUsedTable = whereUsedTable;
    return whereUsedTable;

});
