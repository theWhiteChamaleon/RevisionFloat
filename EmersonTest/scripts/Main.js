// require.config({
//     paths: {
//         vue: "./EmersonTest/Dependencies/vue/vue"
//     }
// });
define("EmersonTest/scripts/Main", [
    "DS/DataDragAndDrop/DataDragAndDrop",
    "DS/WAFData/WAFData",
    "css!EmersonTest/styles/revstyles.css"
],
    function (DataDragAndDroplib, WAFData) {

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

        
        widget.body.innerHTML = temp;
        var droppableContainer = widget.body.querySelector('.droppableContainer');        
        debugger;
        DataDragAndDroplib.droppable(droppableContainer, {
            drop: function (data) {
                console.log("data", data)
                droppableContainer.classList.remove("drag-over");
             
              var dropedObject = JSON.parse(data);
              myWidget.getDroppedObjectInfo(dropedObject.data.items) ;
              
  
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
                alert("In updateWidget 2");

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

         widget.body.innerHTML = temp;
        var droppableContainer = widget.body.querySelector('.droppableContainer');
                DataDragAndDroplib.droppable(droppableContainer, {
            drop: function (data) {
                console.log("data", data)
            droppableContainer.classList.add("drag-over");
             
              
              var dropedObject = JSON.parse(data);
              myWidget.getDroppedObjectInfo(dropedObject.data.items) ;
  
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
        debugger;
            }, getDroppedObjectInfo: function (data) {
                if (data.length > 1) {
                    alert("Please drop only one object");
                    return;
                } else {
                    getCSRFToken(data);
                }
            }, getCSRFToken: function(data) {

                // URLs
                let csrfURL = "https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/application/CSRF?tenant=OI000186152"
                let finalURL = "https://r1132101608061-usw1-space.3dexperience.3ds.com/enovia//resources/v1/modeler/dseng/dseng:EngItem/";

                WAFData.proxifiedRequest(csrfURL, {
                    method: "Get",
                    headers: {

                    },
                    data: {

                    },
                    timeout: 150000,
                    type: "json",
                    onComplete: function (dataResp2, headerResp2) {

                        const csrfToken = dataResp2.csrf.name;
                        const csrfValue = dataResp2.csrf.value;
                        const securityContextHeader = 'SecurityContext';
                        const securityContextValue = encodeURIComponent(widget.getValue("ctx"));

                        const myHeaders = new Object();
                        myHeaders[csrfToken] = csrfValue;
                        myHeaders[securityContextHeader] = securityContextValue;

                        finalURL += data.objectID;
                        console.log("finalURL",finalURL);
                        WAFData.authenticatedRequest(finalURL, {
                            method: "Get",
                            headers: myHeaders,
                            data: {
                            },
                            timeout: 150000,
                            type: "json",
                            onComplete: function (dataResp3, headerResp3) {
                                alert(dataResp3);
                                // let changeActionList = dataResp3.changeAction;
                                // for (let changeActionCount = 0; changeActionCount < changeActionList.length; changeActionCount++) {
                                //     changeAction = changeActionList[changeActionCount];
                                //     let source = changeAction.source;
                                //     let relativePathUrl = changeAction.relativePath;


                                //     let caPropURL = source + relativePathUrl;

                                    // WAFData.authenticatedRequest(caPropURL, {
                                    //     method: "Get",
                                    //     headers: myHeaders,
                                    //     data: {

                                    //     },
                                    //     timeout: 150000,
                                    //     type: "json",
                                    //     onComplete: function (dataResp4, headerResp4) {
                                    //         let caTitle = dataResp4.title;
                                    //         bodyhtml += "<div class='grid-items' style='font-size: small;background-color: #FFFBDF;padding: 10px;'>";
                                    //         bodyhtml += "<div><b>Title :</b> " + caTitle + "</div>";
                                    //         bodyhtml += "<div><b>Name :</b> " + dataResp4.name + "</div>";
                                    //         bodyhtml += "<div><b>Owner :</b> " + dataResp4.owner + "</div>";
                                    //         bodyhtml += "<div><b>Collab Space :</b> " + dataResp4.collabSpace + "</div>";
                                    //         bodyhtml += "</div>";

                                    //         if (changeActionCount == changeActionList.length - 1) {
                                    //             bodyhtml += "</div>"
                                    //             widget.body.innerHTML = bodyhtml;
                                    //         }

                                    //     },
                                    //     onFailure: function (error4, responseDOMString4, headerResp4) {
                                    //         widget.bodyhtml.innerHTML = "Error : "+error4;
                                    //         debugger;
                                    //     }
                                    // });

                                }



                            },
                            onFailure: function (error3, responseDOMString3, headerResp3) {
                                widget.bodyhtml.innerHTML = "Error : "+error3;
                                debugger;

                            }
                        });
                    },
                    onFailure: function (error2, responseDOMString2, headerResp2) {
                        widget.bodyhtml.innerHTML = "Error : "+error2;
                        debugger;

                    }
                });

            }
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
