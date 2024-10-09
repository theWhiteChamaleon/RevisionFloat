define("EmersonTest/components/table", ["DS/DataDragAndDrop/DataDragAndDrop", "DS/WAFData/WAFData","css!EmersonTest/styles/revstyles.css"], function (DataDragAndDrop, WAFData) {

    var whereUsedTable = {
        showTable: function (data) {
            // alert("In ON load 4");

            var tableHTML = `
                <div class="card-container">
                    <div class="row card-boundary">
                        <div class="col-sm-2">
                                <div class="card-image" style="flex: 1;">
                                    <img src="https://thewhitechamaleon.github.io/RevisionFloat/EmersonTest/assets/images/PhysicalProductLarge.png" alt="Sample Image" style="width: 100%;">
                                </div></div>
                                <div class="col-sm-10" style="flex: 1;">
                                    <div class="card-content">
            `;

           


            widget.body.insertAdjacentHTML('beforeend', tableHTML);
           
        }
    }
    widget.whereUsedTable = whereUsedTable;
    return whereUsedTable;

});