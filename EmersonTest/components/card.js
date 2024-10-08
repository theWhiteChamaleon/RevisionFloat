define("EmersonTest/components/card", ["DS/DataDragAndDrop/DataDragAndDrop", "DS/WAFData/WAFData",], function (DataDragAndDrop,WAFData) {

    var card = {
        showCard: function (data) {
            // alert("In ON load 4");

            var metadata = {
                title: "Sample Title",
                description: "This is a sample description.",
                author: "John Doe",
                date: "2023-10-01"
            };
            if (data) {
                metadata = data;
            }
            

            var cardHTML = '<div class="container"><div class="row"><div class="col s12 m6"><div class="card horizontal"><div class="card-image" style="flex: 1;"><img src="https://thewhitechamaleon.github.io/RevisionFloat/EmersonTest/assets/images/PhysicalProductLarge.png" alt="Sample Image" style="width: 100%;"></div><div class="card-stacked" style="flex: 1;"><div class="card-content">';

            for (var key in metadata) {
                if (metadata.hasOwnProperty(key)) {
                    cardHTML += `<p><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${metadata[key]}</p>`;
                }
            }

            cardHTML += '</div></div></div></div></div></div>';


            widget.body.innerHTML = cardHTML;
            // var droppableContainer = widget.body.querySelector('.droppableContainer');
            // debugger;
            // DataDragAndDrop.droppable(droppableContainer, {
            //     drop: function (data) {
            //         console.log("data", data)
            //         droppableContainer.classList.remove("drag-over");

            //         var dropedObject = JSON.parse(data);
            //         dragAndDropComp.getDroppedObjectInfo(dropedObject.data.items);


            //         //   var objId = dropedObject.data["items"][0].objectId;
            //         //   that.objectId = objId;
            //         //   PlatformAPI.publish("DropRCAID", that.objectId) //ZSIAHBH : PLMRM-9640 Refresh - Sync
            //         //   that.dropCADisplayName = dropedObject.data["items"][0].displayName;
            //         //   that.isBtnCAReportDisabled = false;
            //         //   that.callAllMethods();
            //     },
            //     enter: function () {
            //         console.log("Enter");
            //         droppableContainer.classList.add("drag-over");
            //     },
            //     leave: function () {
            //         console.log("leave");
            //         droppableContainer.classList.remove("drag-over");
            //     },
            // });
        }
    }
    widget.card = card;
    return card;



});
