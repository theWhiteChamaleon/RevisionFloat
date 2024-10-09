define("EmersonTest/components/table", ["DS/DataDragAndDrop/DataDragAndDrop", "DS/WAFData/WAFData","css!EmersonTest/styles/revstyles.css"], function (DataDragAndDrop, WAFData) {

    var whereUsedTable = {
        showTable: function (data) {
           

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
           
        }, getAllRevisions: function (data) {

            let finalURL = "https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/modeler/dslc/version/getGraph";
            WAFData.authenticatedRequest(finalURL, {
                method: "Post",
                headers: droppableContainer.csrfHeaders,
                data: {
                    "data": [
                      {
                        "id": data.objectId,
                        "identifier": data.objectId,
                        "type": data.type,
                        "source": "https://oi000186152-us1-space.3dexperience.3ds.com/enovia",
                        "relativePath": "/resources/v1/modeler/dseng/dseng:EngItem/"+data.objectId
                      }
                    ]
                  },
                timeout: 150000,
                type: "json",
                onComplete: function (dataResp3, headerResp2) {
                    console.log("dataResp2", dataResp2);
                }
            });
        }
    }
    widget.whereUsedTable = whereUsedTable;
    return whereUsedTable;

});
