var Rows = {
    rows: 10,
    row_doms: null,
    row_html: '<tr class="row"><th>@</th><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td><td class="cell"><span class="cell_content"></span><input type="text" class="cell_input"></td></tr>',
    add_element: null,

    initRows: function () {
        this.add_element = document.getElementById("add_above");
        this.row_doms = document.getElementsByClassName("row");
    },

    addRow: function () {
        if (this.rows < 100) {
            console.log(this.add_element)
            this.add_element.insertAdjacentHTML("beforebegin", this.row_html.replace("@", this.rows+1));
            this.rows++;
            Cells.initCells();
        }
    },

    deleteRow: function () {
        if (this.rows > 1) {
            this.row_doms[this.rows-1].remove();
            this.rows--;
            Cells.initCells();
        }
    }
}