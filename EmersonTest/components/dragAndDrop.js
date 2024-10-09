define("EmersonTest/components/dragAndDrop", ["DS/DataDragAndDrop/DataDragAndDrop", "DS/WAFData/WAFData", "EmersonTest/components/card","EmersonTest/components/table"], 
    function (DataDragAndDrop, WAFData, card,table) {

    var dragAndDropComp = {
        showDroppable: function () {
            // alert("In ON load 4");

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
            DataDragAndDrop.droppable(droppableContainer, {
                drop: function (data) {
                    console.log("data", data)
                    droppableContainer.classList.remove("drag-over");

                    var dropedObject = JSON.parse(data);
                    dragAndDropComp.getDroppedObjectInfo(dropedObject.data.items);


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
        }, getDroppedObjectInfo: function (data) {
            if (data.length > 1) {
                alert("Please drop only one object");
                return;
            } else {
                dragAndDropComp.getCSRFToken(data);
            }
        },csrfHeaders:[

        ], getCSRFToken: function (data) {
            // URLs
            let csrfURL = "https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/application/CSRF?tenant=OI000186152"
            let finalURL = "https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/modeler/dseng/dseng:EngItem/";

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
                    const securityContextValue = "ctx%3A%3AVPLMProjectLeader.BU-0000001.Rosemount%20Flow";;

                    const myHeaders = new Object();
                    myHeaders[csrfToken] = csrfValue;
                    myHeaders[securityContextHeader] = securityContextValue;
                    dragAndDropComp.csrfHeaders = myHeaders;

                    finalURL += data[0].objectId;
                    finalURL += "?$mask=dsmveng:EngItemMask.Details";
                    console.log("finalURL", finalURL);
                    WAFData.authenticatedRequest(finalURL, {
                        method: "Get",
                        headers: myHeaders,
                        data: {
                        },
                        timeout: 150000,
                        type: "json",
                        onComplete: function (dataResp3, headerResp3) {
                            console.log("dataResp3", dataResp3);


                            const valuesToDisplay = ["title","description","type","revision","state","owner","organization","collabspace","partNumber"];
                            droppedData = dataResp3.member[0];
                            var filteredData = {};
                            function extractValues(obj, keys) {
                                let result = {};
                                for (let key in obj) {
                                    if (obj.hasOwnProperty(key)) {
                                        if (keys.includes(key)) {
                                            result[key] = obj[key];
                                        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
                                            let nestedResult = extractValues(obj[key], keys);
                                            if (Object.keys(nestedResult).length > 0) {
                                                result = { ...result, ...nestedResult };
                                            }
                                        }
                                    }
                                }
                                return result;
                            }

                            filteredData = extractValues(droppedData, valuesToDisplay);
                            console.log("filteredData", filteredData);

                            card.showCard(filteredData);
                            dragAndDropComp.getAllRevisions(dataResp3.member[0]);
                        }
                    });

                }
            });
        }, getAllRevisions: function (data) {

            let finalURL = "https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/modeler/dslc/version/getGraph";
            WAFData.authenticatedRequest(finalURL, {
                method: "Post",
                headers: dragAndDropComp.csrfHeaders,
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
        }, getAllWhereUsedOfRevison: function(data) {

        }, prepareDataForTable: function (data) {
            
        }
    }
    widget.dragAndDropComp = dragAndDropComp;
    return dragAndDropComp;



});
