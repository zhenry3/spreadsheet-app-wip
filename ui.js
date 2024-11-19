/**
 * Global UI object.
 */
var UI = {
    /**
     * Current view. Defaults to format.
     */
    view: "format",
    formatButton: null,     // All have to be null at first because this script loads before the HTML finishes doing so.
    fileButton: null,
    formatDom: null,
    fileDom: null,

    /**
     * Initiates the UI.
     */
    initUI: function () {
        console.log("UI.JS:     UI updated");

        this.formatButton = document.getElementById("format_btn");
        this.fileButton = document.getElementById("file_btn");
        this.formatDom = document.getElementById("format_options");
        this.fileDom = document.getElementById("file_options");

        switch (UI.view) {
            case "format":
                this.formatButton.style.textDecoration = "underline";
                this.formatDom.style.display = "block";
                break;
            case "file":
                this.fileButton.style.textDecoration = "underline";
                this.fileDom.style.display = "block";
                break;
        }
    },

    /**
     * Changes the view of the header.
     * @param {String} view view to change to
     */
    changeView: function (view) {
        console.log("UI.JS: View changed to "+view);
        this.view = view;

        this.fileButton.style.textDecoration = "none";
        this.fileDom.style.display = "none";
        this.formatButton.style.textDecoration = "none";
        this.formatDom.style.display = "none";

        this.initUI();
    }
}