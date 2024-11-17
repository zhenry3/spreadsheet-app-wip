var Cells = {
    rowDoms: document.getElementsByTagName("TR"),
    cellDoms: document.getElementsByClassName("cell"),
    cellContentDoms: document.getElementsByClassName("cell_content"),
    cellInputDoms: document.getElementsByClassName("cell_input"),
    cellTableHeader: document.getElementsByClassName("table_header"),

    clickedDom: null,
    clickedID: null,

    /**
     * Adds event listner to all cells, should run on init and spreadsheet updates
     */
    initCells: function () {
        cell_num = Cells.cellDoms.length;

        for (let i = 0; i < cell_num; i++) {
            this.cellDoms[i].setAttribute("onclick", "Cells.clicked(" + Number(i+1) + ");");
            this.cellDoms[i].setAttribute("onkeydown", "Cells.arrowKeyNavigation(event);");
            this.cellDoms[i].getElementsByClassName("cell_input")[0].setAttribute("onblur", "Cells.clearClicked();");
            this.cellInputDoms[i].style.display = "none";
        }

        Array.from(Cells.cellTableHeader).forEach(function (valu, indx, arr) {
            valu.setAttribute("onclick", "Cells.clearClicked();");
        });
    },

    clicked: function (cellID) {
        if (Cells.clickedDom !== null) {
            Cells.clickedDom.getElementsByClassName("cell_content")[0].innerHTML = Cells.clickedDom.getElementsByClassName("cell_input")[0].value;
        }

        Cells.clickedDom = Cells.cellDoms[cellID -1];
        Cells.clickedID = cellID;
        CellFormatting.loadFormattingSettings();

        Cells.click(cellID);
    },

    click: function (cellID) {
        Cells.clearClicked();
        var cell = Cells.cellDoms[cellID -1];

        cell.getElementsByClassName("cell_content")[0].style.display = "none";
        cell.getElementsByClassName("cell_input")[0].style.display = "block";
        cell.style.border = "3px solid blue";
        cell.getElementsByClassName("cell_input")[0].focus();
    },

    clearClicked: function () {
        console.log(Cells.clickedDom)
        if (Cells.clickedDom != null) {
            Cells.clickedDom.getElementsByClassName("cell_content")[0].innerHTML = Cells.clickedDom.getElementsByClassName("cell_input")[0].value;
        }

        Array.from(Cells.cellDoms).forEach(function (valu, indx, arr) {
            valu.getElementsByClassName("cell_content").innerHTML = valu.getElementsByClassName("cell_content").value;
            valu.getElementsByClassName("cell_content")[0].style.display = "block";
            valu.getElementsByClassName("cell_input")[0].style.display = "none";
            valu.style.border = "1px solid black";
        });
    },

    arrowKeyNavigation: function (event) {
        switch (event.keyCode) {
            case 38:    // Up arrow
                if (Cells.clickedID > 26) {
                    this.clicked(Cells.clickedID - 26);
                }
                break;
            case 40:    // Down arrow
            case 13:    // or enter
                if (Cells.clickedID < ((Rows.rows * 26) - 26)) {
                    this.clicked(Cells.clickedID + 26);
                }
                break;
            case 37:    // Left arrow
                if (Cells.clickedID > 1) {
                    this.clicked(Cells.clickedID - 1);
                }
                break;
            case 39:    // Right arrow
                if (Cells.clickedID < Cells.cellDoms.length) {
                    this.clicked(Cells.clickedID + 1);
                }
                break;
        }
    }
}