// require.config({
//     paths: {
//         vue: "./ERI_UILibrairies/vue/vue",
//     }
// });

define("EmersonTest/components/table", ["DS/DataDragAndDrop/DataDragAndDrop", "DS/WAFData/WAFData","css!EmersonTest/styles/revstyles.css"], function (DataDragAndDrop, WAFData,Tabulator) {

    var whereUsedTable = {
        showTable: function (data) {
           
           
        // Create Tabulator table
        var table = new Tabulator("#example-table", {
            data: data, // Assign data to table
            autoColumns: true, // Create columns from data keys
            layout: "fitColumns", // Fit columns to width of table
            movableColumns: true, // Allow column order to be changed
            selectable: true, // Enable row selection
            columns: [
                {formatter: "rowSelection", titleFormatter: "rowSelection", hozAlign: "center", headerSort: false, cellClick: function(e, cell){
                    cell.getRow().toggleSelect();
                }},
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

        // Append table to DOM
        document.getElementById("table-container").appendChild(table.element);

        
           
        }
    }
    widget.whereUsedTable = whereUsedTable;
    return whereUsedTable;

});
