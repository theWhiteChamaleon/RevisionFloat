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

define("EmersonTest/components/table", ["DS/DataDragAndDrop/DataDragAndDrop", "DS/WAFData/WAFData","tabulator","EmersonTest/components/tableToolbar","css!EmersonTest/styles/revstyles.css","css!tabulatorCss"], function (DataDragAndDrop, WAFData,Tabulator,tableToolbar) {

    var whereUsedTable = {
        showTable: function (data) {

            // Get latest revision detials 
            var highestRev = data.reduce((max, item) => {
                return item.connectedcCildRev > max ? item.connectedcCildRev : max;
            }, data[0].connectedcCildRev);

            // Add isLatestRevision property to each data object
            data.forEach(item => {
                item.isLatestRevision = item.connectedcCildRev === highestRev;
                item.toBeRevision = item.connectedcCildRev === highestRev ? "-" : highestRev;
            });

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
                    {title: "EIN", field: "partNumber"},
                    {title: "Title", field: "title"},
                    {title: "Description", field: "description",width: 300,resizable:true},
                    {title: "Type", field: "type"},
                    {title: "Revision", field: "revision"},
                    {title: "Connected Child Revision", field: "connectedcCildRev"},
                    {title: "Latest child connected", field: "isLatestRevision", formatter:"tickCross"},
                    {title: "To-Be child connected", field: "toBeRevision",},
                    {title: "State", field: "state"},
                    {title: "Owner", field: "owner"},
                    {title: "Collabspace", field: "collabspace"}
                   
                ],
            });

            tableToolbar.showToolbar();


        }
    };
    widget.whereUsedTable = whereUsedTable;
    return whereUsedTable;

});
