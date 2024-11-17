var UI = {
    view: "format",
    formatButton: null,
    fileButton: null,
    formatDom: null,
    fileDom: null,

    initUI: function () {

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

    changeView: function (view) {
        this.view = view;

        this.fileButton.style.textDecoration = "none";
        this.fileDom.style.display = "none";
        this.formatButton.style.textDecoration = "none";
        this.formatDom.style.display = "none";

        this.initUI();
    }
}