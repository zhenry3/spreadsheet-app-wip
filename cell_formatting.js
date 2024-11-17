var CellFormatting = {

    loadFormattingSettings: function (cellID) {
        cellID = cellID ?? Cells.clickedID;
        var dom = Cells.cellDoms[cellID -1].getElementsByClassName("cell_content")[0];
        if (dom.style.color == "") {
            dom.style.color = "#000000";
        }
        if (dom.parentElement.style.backgroundColor == "") {
            dom.parentElement.style.backgroundColor = "#ffffff";
        }
        document.getElementById("text_color_in").value = rgbToHex(dom.style.color);  
        document.getElementById("bg_color_in").value = rgbToHex(dom.parentElement.style.backgroundColor);
    },

    changeTextColor: function (cellID) {
        cellID = cellID ?? Cells.clickedID;
        text_color = document.getElementById("text_color_in").value;
        Cells.cellDoms[cellID -1].getElementsByClassName("cell_content")[0].style.color = text_color;
    },

    changeBackgroundColor: function (cellID) {
        cellID = cellID ?? Cells.clickedID;
        bg_color = document.getElementById("bg_color_in").value;
        Cells.cellDoms[cellID -1].style.backgroundColor = bg_color;
    },

    toggleBold: function (cellID) {
        cellID = cellID ?? Cells.clickedID;
        var dom = Cells.cellDoms[cellID -1].getElementsByClassName("cell_content")[0];
        if (dom.style.fontWeight == "bold") {
            dom.style.fontWeight = "normal";
        } else {
            dom.style.fontWeight = "bold";
        }
    },

    toggleItalics: function (cellID) {
        cellID = cellID ?? Cells.clickedID;
        var dom = Cells.cellDoms[cellID -1].getElementsByClassName("cell_content")[0];
        if (dom.style.fontStyle == "italic") {
            dom.style.fontStyle = "normal";
        } else {
            dom.style.fontStyle = "italic";
        }
    },

    toggleUnderline: function (cellID) {
        cellID = cellID ?? Cells.clickedID;
        var dom = Cells.cellDoms[cellID -1].getElementsByClassName("cell_content")[0];
        if (dom.style.textDecoration == "underline") {
            dom.style.textDecoration = "normal";
        } else {
            dom.style.textDecoration = "underline";
        }
    }




}