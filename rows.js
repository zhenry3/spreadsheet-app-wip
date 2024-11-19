var Rows = {
    rows: 10,
    row_doms: null,
    row_html: '<tr class="row"><th class="table_header">@</th><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td></tr>',
    // What a mess.
    add_element: null,

    initRows: function () {
        console.log("ROWS.JS:   Rows initialized");
        this.add_element = document.getElementById("add_above");
        this.row_doms = document.getElementsByClassName("row");
    },

    addRow: function () {
        console.log("ROWS.JS: Row added");
        if (this.rows < 100) {
            this.add_element.insertAdjacentHTML("beforebegin", this.row_html.replace("@", this.rows+1));    // @ = placeholder for row num
            this.rows++;
            Cells.initCells();
        }
    },

    deleteRow: function () {
        console.log("ROWS.JS: Row deleted");
        if (this.rows > 1) {
            this.row_doms[this.rows-1].remove();
            this.rows--;
            Cells.initCells();
        }
    }
}