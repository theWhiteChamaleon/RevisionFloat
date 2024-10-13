require.config({
    paths: {
        // Define the path for Tabulator (already included in HTML via CDN)
        tabulator: 'https://unpkg.com/tabulator-tables@6.3.0/dist/js/tabulator.min',
        tabulatorCss: 'https://unpkg.com/tabulator-tables@6.3.0/dist/css/tabulator.min' // Path for Tabulator CSS
    },
    shim: {
        // Make Tabulator available globally to RequireJS
        tabulator: {
            exports: 'Tabulator'
        }
    }
});

define("EmersonTest/components/table", ["DS/DataDragAndDrop/DataDragAndDrop", "DS/WAFData/WAFData","tabulator","css!EmersonTest/styles/revstyles.css","css!tabulatorCss"], function (DataDragAndDrop, WAFData,Tabulator) {

    var whereUsedTable = {
        showTable: function (data) {
            // Create Tabulator table
            var tableDiv = document.createElement('div');
            tableDiv.id = "example-table";
            widget.body.appendChild(tableDiv);

            var table = new Tabulator("#example-table", {
                data: data,
                layout: "fitColumns",
                resizableColumnGuide: true,
                selectableRows:true,
                dataTree:true,
                columnDefaults:{
                    tooltip:true,
                },
                movableColumns:true,
                selectableRowsRangeMode:"click",
                rowHeader: {formatter:"rowSelection", titleFormatter:"rowSelection", titleFormatterParams:{
                    rowRange:"active" //only toggle the values of the active filtered rows
                }, headerSort:false},
                layout: "fitData",
                columns: [
                    {title: "Parent ID", field: "parentID"},
                    {title: "Child ID", field: "childID"},
                    {title: "Title", field: "title"},
                    {title: "Description", field: "description",width: 300,resizable:true},
                    {title: "ID", field: "id"},
                    {title: "Type", field: "type"},
                    {title: "Revision", field: "revision"},
                    {title: "State", field: "state"},
                    {title: "Owner", field: "owner"},
                    {title: "Organization", field: "organization"},
                    {title: "Collabspace", field: "collabspace"},
                    {title: "Part Number", field: "partNumber"},
                ],
            });
        }
    };
    widget.whereUsedTable = whereUsedTable;
    return whereUsedTable;

});
