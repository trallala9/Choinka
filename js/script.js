function drawTree(h) {
    for (var i = 0; i <= h; i++) {
        var star = "";
        for (var j = 1; j <= 2 * i + 1; j++) {
            star += "*";
        }
        console.log("%c%s", "font-size: 20px; color: green",
            star);
    }
}
drawTree(1)

var h = 1;
for (let i = 0; i < h; i++) {
    for (let j = h + 3; j > i; j--) {
        document.write("&nbsp&nbsp");
    }
    for (let k = 0; k <= (i * 2); k++) {
        document.write("*");
    }
    document.write("<br>");
}

function drawTree(h) {
    for (var i = 0; i <= h; i++) {
        var star = "";
        for (var j = 1; j <= 2 * i + 1; j++) {
            star += "*";
        }
        console.log("%c%s", "font-size: 20px; color: green",
            star);
    }
}
drawTree(2)

var h = 2;
for (let i = 0; i < h; i++) {
    for (let j = h + 2; j > i; j--) {
        document.write("&nbsp&nbsp");
    }
    for (let k = 0; k <= (i * 2); k++) {
        document.write("*");
    }
    document.write("<br>");
}

function drawTree(h) {
    for (var i = 0; i <= h; i++) {
        var star = "";
        for (var j = 1; j <= 2 * i + 1; j++) {
            star += "*";
        }
        console.log("%c%s", "font-size: 20px; color: green",
            star);
    }
}
drawTree(5)

var h = 5;
for (let i = 0; i < h; i++) {
    for (let j = h - 1; j > i; j--) {
        document.write("&nbsp&nbsp");
    }
    for (let k = 0; k <= (i * 2); k++) {
        document.write("*");
    }
    document.write("<br>");
}
