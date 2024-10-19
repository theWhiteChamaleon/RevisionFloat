require.config({
    paths: {
        bootstrapCss: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min', // Path for Tabulator CSS
        
    }
});

define("EmersonTest/components/card", ["EmersonTest/components/dragAndDrop","DS/DataDragAndDrop/DataDragAndDrop","css!EmersonTest/styles/revstyles.css","css!bootstrapCss"], function (dragAndDropComp,DataDragAndDrop) {

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


            var cardHTML = `
                <div class="card-container">
                    <div class="row card-boundary">
                        <div class="col-sm-2">
                                <div class="card-image" style="flex: 1;">
                                    <img src="https://thewhitechamaleon.github.io/RevisionFloat/EmersonTest/assets/images/PhysicalProductLarge.png" alt="Sample Image" style="width: 100%;">
                                </div></div>
                                <div class="col-sm-10" style="flex: 1;">
                                    <div class="card-content">
            `;

            for (var key in metadata) {
                if (key === "partNumber") {
                metadata["EIN"] = metadata[key];
                delete metadata[key];
                key="EIN";
                } else if (key === "organization") {
                    delete metadata[key];
                    continue;
                }
                if (metadata.hasOwnProperty(key)) {
                    cardHTML += `<p title="${metadata[key]}"><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${metadata[key]}</p>`;
                }
            }

            cardHTML += '</div></div></div></div>';

            widget.body.innerHTML = cardHTML;

            var droppableContainer = widget.body.querySelector('.card-container');
                debugger;
                DataDragAndDrop.droppable(droppableContainer, {
                    drop: function (data) {
                        console.log("data", data)
                        droppableContainer.classList.remove("drag-over");

                        var dropedObject = JSON.parse(data);
                        dragAndDropComp.getDroppedObjectInfo(dropedObject.data.items);

                    },
                    enter: function () {
                        console.log("Enter");
                        droppableContainer.classList.add("drag-over");
                    },
                    leave: function () {
                        console.log("leave");
                        droppableContainer.classList.remove("drag-over");
                    },
                });
            
        }
    }
    widget.card = card;
    return card;



});
