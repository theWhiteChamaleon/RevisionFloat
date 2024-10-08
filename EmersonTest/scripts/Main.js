// require.config({
//     paths: {
//         vue: "./EmersonTest/Dependencies/vue/vue"
//     }
// });
define("EmersonTest/scripts/Main", [
    "DS/DataDragAndDrop/DataDragAndDrop",
    "css!EmersonTest/styles/revstyles.css"
],
    function (DataDragAndDroplib) {

        var myWidget = {
            ObjectId: "",
            name: "Amit",
            onLoad: function () {
                alert("In ON load 2");

                var temp =
                    `<div class="droppableContainer" style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh; color: blue;">
            <img 
                src="https://thewhitechamaleon.github.io/RevisionFloat/EmersonTest/assets/images/drag-and-drop.png" 
                alt="Drag and Drop" 
                style="width: 60px; height: 60px;" 
            />
            <span style="font-size: 20px; color: black;">Drag and Drop</span>
            <div style="display: flex; align-items: center; margin-top: 20px; width: 30%;">
                <hr style="flex: 1;" />
                <span style="margin: 0 10px; color: black;">or</span>
                <hr style="flex: 1;" />
            </div>
            <div style="display: flex; align-items: center; margin-top: 20px;">
                <img 
                    src="https://thewhitechamaleon.github.io/RevisionFloat/EmersonTest/assets/images/I_WI_DataCollect108x144.png" 
                    alt="Data Collect" 
                    style="width: 60px; height: 50px; margin-right: 10px;" 
                />
                <span style="font-size: 20px; color: black;">Click here to search content</span>
            </div>
        </div>`;

        var droppableContainer = widget.body.querySelector('.droppableContainer');
        widget.body.innerHTML = temp;
        debugger;
        DataDragAndDroplib.droppable(droppableContainer, {
            drop: function (data) {
                console.log("data", data)
            droppableContainer.classList.add("drag-over");
             
              var dropedObject = JSON.parse(data);
  
            //   var objId = dropedObject.data["items"][0].objectId;
            //   that.objectId = objId;
            //   PlatformAPI.publish("DropRCAID", that.objectId) //ZSIAHBH : PLMRM-9640 Refresh - Sync
            //   that.dropCADisplayName = dropedObject.data["items"][0].displayName;
            //   that.isBtnCAReportDisabled = false;
            //   that.callAllMethods();
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

        


            },
            updateWidget: function () {
                alert("In updateWidget");

                var temp =
                    `<div id="droppableContainer" style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh; color: blue;">
            <img 
                src="https://thewhitechamaleon.github.io/RevisionFloat/EmersonTest/assets/images/drag-and-drop.png" 
                alt="Drag and Drop" 
                style="width: 60px; height: 60px;" 
            />
            <span style="font-size: 20px; color: black;">Drag and Drop</span>
            <div style="display: flex; align-items: center; margin-top: 20px; width: 30%;">
                <hr style="flex: 1;" />
                <span style="margin: 0 10px; color: black;">or</span>
                <hr style="flex: 1;" />
            </div>
            <div style="display: flex; align-items: center; margin-top: 20px;">
                <img 
                    src="https://thewhitechamaleon.github.io/RevisionFloat/EmersonTest/assets/images/I_WI_DataCollect108x144.png" 
                    alt="Data Collect" 
                    style="width: 60px; height: 50px; margin-right: 10px;" 
                />
                <span style="font-size: 20px; color: black;">Click here to search content</span>
            </div>
        </div>`;

        let droppableContainer = document.getElementById("droppableContainer");
            },
            // getData: function () {
            //     let spaceURL = "https://3dxr21x-d4.emrsn.org:447/3dspace";
            //     let urlWAF = spaceURL + "/EmersonTestModel/EmersonTestService/getTestData";

            //     WAFData.authenticatedRequest(urlWAF, {
            //         method: "Get",
            //         headers: {
            //             SecurityContext: "ctx::MCO Coordinator.MMH.GLOBAL"
            //         },
            //         data: {
            //             type: "FSGEngineeringDrawing",
            //             limit: "50"
            //         },
            //         timeout: 150000,
            //         type: "json",
            //         onComplete: function (dataResp, headerResp) {
            //             let tableData = `<div class="table-responsive"><table class="table table-striped">
            //         <thead>`;
            //             let sampleData = dataResp.data[0];
            //             console.log("sampleData", sampleData);
            //             let headers = Object.keys(sampleData);
            //             for (header of headers) {
            //                 tableData += `<th>${header}</th>`;
            //             }
            //             tableData += `</thead><tbody>`;
            //             for (dataJson of dataResp.data) {
            //                 tableData += `<tr>`;
            //                 for (value of Object.values(dataJson)) {
            //                     tableData += `<td>${value}</td>`;
            //                 }
            //                 tableData += `</tr>`;
            //             }

            //             tableData += `</thead></table></div>`;
            //             widget.body.innerHTML = tableData;
            //         },
            //         onFailure: function (error, responseDOMString, headerResp) {
            //             // if (typeof options.onFailure === "function") {
            //             //     options.onFailure(error, responseDOMString, headerResp, options.callbackData);
            //             // }
            //         }
            //     });
            // }

        }
        widget.myWidget = myWidget;
        return myWidget;
    });
