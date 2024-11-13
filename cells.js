var Cells = {
    rowDoms: document.getElementsByTagName("TR"),
    cellDoms: document.getElementsByClassName("cell"),
    cellContentDoms: document.getElementsByClassName("cell_content"),
    cellInputDoms: document.getElementsByClassName("cell_input"),

    clickedDom: null,
    clickedID: null,    // Starts at 1

    /**
     * Adds event listner to all cells, should run on init and spreadsheet updates
     * @param {Boolean} all Boolean flag. Use cellDoms to determine number of cells in table.
     * @param {Number} width 
     * @param {Number} height 
     */
    initCells: function (width, height) {
        if (width == null || height == null) {
            cell_num = Cells.cellDoms.length;
        } else {
            cell_num = width * height;
        }

        if (cell_num == 0) {
            cell_num = Cells.cellDoms.length;
        }
        //cell_num = (width * height) ?? Cells.cellDoms.length;
        console.log(cell_num)

        for (let i = 0; i < cell_num; i++) {
            //cellDomArr = Array.from(this.cellDoms);
            this.cellDoms[i].setAttribute("onclick", "Cells.clicked(" + Number(i+1) + ")");
            this.cellInputDoms[i].style.display = "none";
        }
    },

    clicked: function (cellID) {
        console.log("clicked");
        //cellID = event.srcElement.cellIndex;

        console.log(cellID);

        if (Cells.clickedDom !== null) {
            Cells.clickedDom.getElementsByClassName("cell_content")[0].innerHTML = Cells.clickedDom.getElementsByClassName("cell_input")[0].value;
        }

        Cells.clickedDom = Cells.cellDoms[cellID -1];
        Cells.clickedID = cellID;

        Cells.click(cellID);
    },

    click: function (cellID) {
        Cells.clearClicked();
        var cell = Cells.cellDoms[cellID -1];
        console.log(cell)

        cell.getElementsByClassName("cell_content")[0].style.display = "none";
        cell.getElementsByClassName("cell_input")[0].style.display = "block";
        cell.style.border = "3px solid blue";
        cell.getElementsByClassName("cell_input")[0].focus();
    },

    clearClicked: function () {
        Array.from(Cells.cellDoms).forEach(function (valu, indx, arr) {
            valu.getElementsByClassName("cell_content")[0].style.display = "block";
            valu.getElementsByClassName("cell_input")[0].style.display = "none";
            valu.style.border = "1px solid black";
        });
    }
}