const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

function ResponsiveCellHeaders(elmID) {
  try {
    var THarray = [];
    var table = document.getElementById(elmID);
    var ths = table.getElementsByTagName("th");
    for (var i = 0; i < ths.length; i++) {
      var headingText = ths[i].innerHTML;
      THarray.push(headingText);
    }
    var styleElm = document.createElement("style"),
      styleSheet;
    document.head.appendChild(styleElm);
    styleSheet = styleElm.sheet;
    for (var i = 0; i < THarray.length; i++) {
      styleSheet.insertRule(
        "#" +
          elmID +
          " td:nth-child(" +
          (i + 1) +
          ')::before {content:"' +
          THarray[i] +
          ': ";}',
        styleSheet.cssRules.length
      );
    }
  } catch (e) {
    console.log("ResponsiveCellHeaders(): " + e);
  }
}
ResponsiveCellHeaders("Books");

function AddTableARIA() {
  try {
    var allTables = document.querySelectorAll("table");
    for (var i = 0; i < allTables.length; i++) {
      allTables[i].setAttribute("role", "table");
    }
    var allRowGroups = document.querySelectorAll("thead, tbody, tfoot");
    for (var i = 0; i < allRowGroups.length; i++) {
      allRowGroups[i].setAttribute("role", "rowgroup");
    }
    var allRows = document.querySelectorAll("tr");
    for (var i = 0; i < allRows.length; i++) {
      allRows[i].setAttribute("role", "row");
    }
    var allCells = document.querySelectorAll("td");
    for (var i = 0; i < allCells.length; i++) {
      allCells[i].setAttribute("role", "cell");
    }
    var allHeaders = document.querySelectorAll("th");
    for (var i = 0; i < allHeaders.length; i++) {
      allHeaders[i].setAttribute("role", "columnheader");
    }

    var allRowHeaders = document.querySelectorAll("th[scope=row]");
    for (var i = 0; i < allRowHeaders.length; i++) {
      allRowHeaders[i].setAttribute("role", "rowheader");
    }
  } catch (e) {
    console.log("AddTableARIA(): " + e);
  }
}

AddTableARIA();
