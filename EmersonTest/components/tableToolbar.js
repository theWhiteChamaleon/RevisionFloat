require.config({
    paths: {
        bootstrapCss: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min', // Path for Tabulator CSS
        
    }
});

define("EmersonTest/components/tableToolbar", ["DS/DataDragAndDrop/DataDragAndDrop", "DS/WAFData/WAFData","UWA/Utils/InterCom","EmersonTest/components/table","css!EmersonTest/styles/revstyles.css","css!bootstrapCss"], function (DataDragAndDrop, WAFData, InterCom, customTable) {

    var tableToolbar = {
        showToolbar: function (tableData) {
            
            data = [
                { buttonLabel: "Select all", onClick: tableToolbar.selectAll },
                { buttonLabel: "De-Select all", onClick: tableToolbar.deselectAll },
                { buttonLabel: "Select items in my Collaborative Space", onClick: tableToolbar.selectMyCollbSpaceObjs },
                { buttonLabel: "Replace", onClick: tableToolbar.replaceObjects, style:"margin-left: auto; margin-right:5px" },
            ];




            var toobarHTML = '';
            data.forEach(button => {
                toobarHTML += `<button class="btn btn-primary" ${button.style ? `style="${button.style}"` : ''}>${button.buttonLabel}</button>`;
            });
           

            var tableToobarDiv = document.createElement('div');
            tableToobarDiv.id = "tableToobarDiv";
            tableToobarDiv.className = "tableToobarDiv";
            tableToobarDiv.innerHTML = toobarHTML;
            
            var tableElement = document.getElementById("example-table");
            var parentElement = tableElement.parentNode;

            // Insert the new element before the reference element
            parentElement.insertBefore(tableToobarDiv, tableElement);

            // Add onclick event listeners to the buttons
            var buttons = tableToobarDiv.getElementsByTagName('button');
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].onclick = data[i].onClick;
            }
            
        },selectAll: function () {
            widget.whereUsedTable.tableData.selectRow();
        },deselectAll: function (tableData) {
            widget.whereUsedTable.tableData.deselectRow();
        },selectMyCollbSpaceObjs: function (tableData) {

            console.log("---In Search---")

    
            var socketName = "socket" + new Date().toISOString().replace(/[-:]/g, '');

            var socket = new InterCom.Socket(socketName,{dispatchRetryInternal:0});
            console.log(socket);

            
            var searchOpts = {
              title:"Search" ,
              role: "",
              mode: "furtive",
              default_with_precond: true,
              precond: 'flattenedtaxonomies:"types/VPMReference"',
              //precond: 'flattenedtaxonomies:"types/Project Space"',
              //precond: 'flattenedtaxonomies:"types/Route Template" AND current:"active" AND latestrevision:"TRUE"',
              show_precond: false,
              multiSel: false,
              idcard_activated: false,
              select_result_max_idcard: false,
              itemViewClickHandler: "",
              app_socket_id: socketName,
              widget_id: widget.id,
              search_delegation: "3dsearch",
              default_search_criteria: "prd:*"
            };


      //       count=0;
      //  let precond = "";
      //  //add types here
      //    precond= 'flattenedtaxonomies:"types/VPMReference"';
      //    //precond+="NOT (physicalid:06E3A8E2C40800001EA56E5A1F8B0500)";
      //    var i;
      //    var h = Uwacore.Utils.getUUID();
      //    var g = this;
      //    g.is3DSearchActive = true;
      //    if (!Uwacore.is(i)) {
      //      require(["DS/SNInfraUX/SearchCom"], function (k) {
      //        i = k.createSocket({
      //            socket_id: h
      //          });
      //        var searchOptions = {
      //          title:"Search" ,
      //          role: "",
      //          mode: "furtive",
      //          default_with_precond: true,
      //          precond: 'flattenedtaxonomies:"types/VPMReference"',
      //          //precond: 'flattenedtaxonomies:"types/Project Space"',
      //          //precond: 'flattenedtaxonomies:"types/Route Template" AND current:"active" AND latestrevision:"TRUE"',
      //          show_precond: false,
      //          multiSel: false,
      //          idcard_activated: false,
      //          select_result_max_idcard: false,
      //          itemViewClickHandler: "",
      //          app_socket_id: h,
      //          widget_id: h,
      //          search_delegation: "3dsearch",
      //          default_search_criteria: ""
      //        };
      //        if (widget.getPreference("collab-storage") != undefined) {
      //          l.tenant = widget.getPreference("collab-storage").value
      //        } else {
      //           l.tenant = "OI000186152";
      //        }
      //        var j =["VPMReference"]; //addd types here
      //        l.recent_search = {
      //          types: j
      //        };
      //        l.app_socket_id = h;
      //        l.widget_id = h;
      //        l.global_actions = [{
      //            id: "incontextHelp",
      //            title: "Help",
      //            icon: "fonticon fonticon-help",
      //            overflow: false
      //          }
      //        ];
      //        if (Uwacore.is(i)) {
      //          i.dispatchEvent("RegisterContext", l);
      //          i.addListener("Selected_Objects_search", g.selected_Search_Objects);
      //          i.dispatchEvent("InContextSearch", l)
      //        } else {
      //          throw new Error("Socket not initialized")
      //        }
      //      })
      //    }
            
        }, replaceObjects: function () {
            widget.whereUsedTable.updateAllRevision();
        }
    }
    widget.tableToolbar = tableToolbar;
    return tableToolbar;



});
