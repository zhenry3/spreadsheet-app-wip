/**
 * Global cell formatting object
 */
var CellFormatting = {
    /**
     * Loads the formatting settings in the header for a given cell ID.
     * @param {Number} cellID Optional. Cell ID of the target cell. 
     */
    loadFormattingSettings: function (cellID) {
        console.log("CELL_FORMATTING.JS: Format settings loaded");
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

    /**
     * Changes the text color for a target cell.
     * @param {Number} cellID Optional. Cell ID of the target cell. 
     */
    changeTextColor: function (cellID) {
        console.log("CELL_FORMATTING.JS: Text color changed");
        cellID = cellID ?? Cells.clickedID;
        const text_color = document.getElementById("text_color_in").value;
        Cells.cellDoms[cellID -1].getElementsByClassName("cell_content")[0].style.color = text_color;
    },

    /**
     * Changes the background color for a target cell.
     * @param {Number} cellID Optional. Cell ID of the target cell.
     */
    changeBackgroundColor: function (cellID) {
        console.log("CELL_FORMATTING.JS: Background color changed");
        cellID = cellID ?? Cells.clickedID;
        const bg_color = document.getElementById("bg_color_in").value;
        Cells.cellDoms[cellID -1].style.backgroundColor = bg_color;
    },

    /**
     * Toggles bold on or off for a target cell.
     * @param {Number} cellID Optional. Cell ID of the target cell. 
     */
    toggleBold: function (cellID) {
        console.log("CELL_FORMATTING.JS: Bold toggled");
        cellID = cellID ?? Cells.clickedID;
        var dom = Cells.cellDoms[cellID -1].getElementsByClassName("cell_content")[0];
        if (dom.style.fontWeight == "bold") {
            dom.style.fontWeight = "normal";
        } else {
            dom.style.fontWeight = "bold";
        }
    },

    /**
     * Toggles italics on or off for a target cell.
     * @param {Number} cellID Optional. Cell ID of the target cell. 
     */
    toggleItalics: function (cellID) {
        console.log("CELL_FORMATTING.JS: Italics toggled");
        cellID = cellID ?? Cells.clickedID;
        var dom = Cells.cellDoms[cellID -1].getElementsByClassName("cell_content")[0];
        if (dom.style.fontStyle == "italic") {
            dom.style.fontStyle = "normal";
        } else {
            dom.style.fontStyle = "italic";
        }
    },

    /**
     * Toggles underline on or off for a target cell.
     * @param {Number} cellID Optional. Cell ID of the target cell. 
     */
    toggleUnderline: function (cellID) {
        console.log("CELL_FORMATTING.JS: Underline toggled");
        cellID = cellID ?? Cells.clickedID;
        var dom = Cells.cellDoms[cellID -1].getElementsByClassName("cell_content")[0];
        if (dom.style.textDecoration == "underline") {
            dom.style.textDecoration = "normal";
        } else {
            dom.style.textDecoration = "underline";
        }
    }




}