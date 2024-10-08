// require.config({
//     paths: {
//         vue: "./EmersonTest/Dependencies/vue/vue"
//     }
// });
define("EmersonTest/scripts/Main", [
    "DS/PlatformAPI/PlatformAPI",
    "DS/WAFData/WAFData",
    "EmersonTest/scripts/dragAndDrop" // Add this line
],
    function (PlatformAPI, WAFData,dragAndDrop) {

        var myWidget = {
            ObjectId: "",
            name: "Amit",
            onLoad: function () {
                alert("In ON load");
                alert(dragAndDrop())
                widget.body.innerhtml = dragAndDrop();


            },
            updateWidget: function () {
                alert("In updateWidget");
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
