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
        console.log("CELLS.JS:  Cells initiated");
        const cell_num = Cells.cellDoms.length;

        for (let i = 0; i < cell_num; i++) {
            this.cellDoms[i].setAttribute("onclick", "Cells.clicked(" + Number(i+1) + ");");
            this.cellDoms[i].setAttribute("onkeydown", "Cells.arrowKeyNavigation(event);");
            //this.cellDoms[i].getElementsByClassName("cell_input")[0].setAttribute("onblur", "Cells.clearClicked();");
            this.cellInputDoms[i].style.display = "none";
        }

        Array.from(Cells.cellTableHeader).forEach(function (valu, indx, arr) {
            valu.setAttribute("onclick", "Cells.clearClicked();");
        });
    },

    /**
     * TODO: Refactor Before Release!
     * Should be refactored for simplicity. Can be combined with Cells.click. Will do later.
     * @param {Number} cellID Cell ID of the target cell.
     */
    clicked: function (cellID) {
        console.log("CELLS.JS:  Clicked");
        Cells.clearClicked();
        if (Cells.clickedDom !== null) {
            Cells.clickedDom.getElementsByClassName("cell_content")[0].innerHTML = Cells.clickedDom.getElementsByClassName("cell_input")[0].value;
        }

        Cells.clickedDom = Cells.cellDoms[cellID -1];
        Cells.clickedID = cellID;
        CellFormatting.loadFormattingSettings();

        Cells.click(cellID);
    },

    /**
     * TODO: Refactor Before Release!
     * Should be combined with Cells.clicked and refactored. Will do later.
     * Functionality (of this and Cells.clicked) is critical to app, so it requires a lot of thought to refactor. In the mean time tho, it works.
     * @param {Number} cellID Cell ID of the target cell. 
     */
    click: function (cellID) {
        console.log("CELLS.JS:  Click")
        //Cells.clearClicked();
        const cell = Cells.cellDoms[cellID -1];

        cell.getElementsByClassName("cell_content")[0].style.display = "none";
        cell.getElementsByClassName("cell_input")[0].style.display = "block";
        cell.style.border = "3px solid blue";
        cell.getElementsByClassName("cell_input")[0].focus();

        this.calcCellOutput();
    },

    /**
     * Deselects, saves value, and clears selected value css.
     */
    clearClicked: function () {
        console.log("CELLS.JS:  Clicked cleared");
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

    /**
     * Responds to arrow keys by moving in the direction
     * @param {KeyboardEvent} event 
     */
    arrowKeyNavigation: function (event) {
        //this.clearClicked()
        switch (event.keyCode) {
            case 38:    // Up arrow
                console.log("CELLS.JS:  Arrow navigated up");
                if (Cells.clickedID > 26) {
                    this.clicked(Cells.clickedID - 26);
                }
                break;
            case 40:    // Down arrow
            case 13:    // or enter
                console.log("CELLS.JS:  Arrow navigated down");
                if (Cells.clickedID < ((Rows.rows * 26) - 25)) {
                    this.clicked(Cells.clickedID + 26);
                }
                break;
            case 37:    // Left arrow
                console.log("CELLS.JS:  Arrow navigated left");
                if (Cells.clickedID > 1) {
                    this.clicked(Cells.clickedID - 1);
                }
                break;
            case 39:    // Right arrow
                console.log("CELLS.JS:  Arrow navigated right");
                if (Cells.clickedID < Cells.cellDoms.length) {
                    this.clicked(Cells.clickedID + 1);
                }
                break;
        }
        //this.clearClicked();
    },

    /**
     * Takes in cellID and returns the cell coordinates on the spreadsheet.
     * @param {Number} cellID CellID of the target cell.
     */
    calcCellOutput: function (cellID) {
        console.log("CELLS.JS:  Cell output calculated");
        cellID = cellID ?? this.clickedID;

        var letter = cellID % 26;
        var row = Math.floor(cellID / 26) +1;
        const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
        if (letter == 0) {
            letter = 26;
            row--;
        }
        const final_letter = letters[letter -1];

        document.getElementById("clicked_cell").innerHTML = final_letter + row;
    },
}