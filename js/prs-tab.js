/* 
    Author : Atakan Argın
    Github : https://github.com/atakanargn
    LinkedIn : https://linkedin.com/in/atakanargn
    E-mail : argin.atakan@gmail.com
*/

class ProdseenTab {
    #tabs;
    #class_name;

    constructor() {
        this.#class_name = "prs-tab";
        this.#add_styles();
        this.#find_and_select();
    }

    #add_styles() {
        let style = document.createElement("style");
        style.innerHTML = `
      .prs-tab {
        list-style-type: none;
        padding: 0 !important;
        margin: 0 !important;
        box-sizing: border-box;
      }

      .prs-tab > li {
        display: inline-block;
        border: 1px groove #CCC;
        border-radius: 4px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom: none;
        margin: 0 !important;
        padding: 6px;
        cursor: pointer;
        z-index:500;
      }

      .prs-tab > .selected {
        font-weight: bolder;
        background-color: #EEE;
        border-bottom: none;
        cursor: auto;
      }

      .prs-tabs {
        border-top: 1px groove #EEE;
        background-color: #EEE;
        padding:8px;
        margin-top: 0 !important;
        border: 1px groove #CCC;
        border-top:none;
        box-sizing: border-box;
      }
      `;
        document.head.appendChild(style);
    }

    #find_and_select() {
        let tabs = Array.from(
            document.getElementsByClassName(this.#class_name)
        );
        tabs.forEach((elem) => {
            this.#tabs = Array.from(elem.getElementsByTagName("li"));
            let not_selected = true;
            this.#tabs.forEach((element) => {
                document.getElementById(
                    element.getAttribute("to")
                ).style.display = "none";
                const self = this;
                element.addEventListener("click", () => {
                    self.select(element);
                });
                let classes = element.classList;
                classes.forEach((_cl) => {
                    if (_cl == "selected")
                        document.getElementById(
                            element.getAttribute("to")
                        ).style.display = "block";
                });
            });
            if (not_selected) {
                document.getElementById(
                    this.#tabs[0].getAttribute("to")
                ).style.display = "block";
                this.#tabs[0].classList.add("selected");
            }
        });
    }

    select(el) {
        let elem = el.parentNode;
        this.#tabs = Array.from(elem.getElementsByTagName("li"));
        let not_selected = true;
        this.#tabs.forEach((element) => {
            element.classList.remove("selected");
            document.getElementById(element.getAttribute("to")).style.display =
                "none";
        });
        el.classList.add("selected");
        document.getElementById(el.getAttribute("to")).style.display =
            "block";
    }

    change(tab) {
        let el = document.getElementById(tab);
        let selected_tab;
        let tabs = Array.from(
            document.getElementsByClassName(this.#class_name)
        );
        tabs.forEach((elem) => {
            this.#tabs = Array.from(elem.getElementsByTagName("li"));
            this.#tabs.forEach((element) => {
                element.classList.remove("selected");
                document.getElementById(
                    element.getAttribute("to")
                ).style.display = "none";
                if (element.getAttribute("to") == tab) selected_tab = element;
            });
        });
        selected_tab.classList.add("selected");
        el.style.display = "block";
    }
}