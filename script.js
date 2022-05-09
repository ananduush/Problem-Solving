// var input = document.querySelectorAll("#value_1, #value_2, #value_3");
function showText(lol) {
    var e = document.querySelector("p")
    e.innerHTML = "";
    var text = document.createElement("text");
    var p = document.getElementById("showAnswer")
    text.setAttribute('id', lol);
    text.appendChild(document.createTextNode(lol));
    p.appendChild(text);
}

function jadenSmith(str) {
    var arr = str.split(" ");

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    showText(arr.join(''));
}

function vowelCount(arr) {
    var count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "a" || arr[i] == "e" || arr[i] == "o" || arr[i] == "i" || arr[i] == 'u') {
            count++;
        }
    }
    showText(count)

}

function validatePin(pin) {
    if (pin.toString().split("").filter(Number).length == pin.toString().length) {
        showText("true")
    } else {
        showText("false")
    }

}

function romanNumber(num) {

    function findUnits(x) {
        switch (x) {
            case 0:
                return;
            case 1:
                return "I";
            case 2:
                return "II";
            case 3:
                return "III";
            case 4:
                return "IV";
            case 5:
                return "V";
            case 6:
                return "VI";
            case 7:
                return "VII";
            case 8:
                return "VIII";
            case 9:
                return "IX";
        }
    }

    function findTens(x) {
        switch (x) {
            case 0:
                return;
            case 1:
                return "X";
            case 2:
                return "XX";
            case 3:
                return "XXX";
            case 4:
                return "XL";
            case 5:
                return "L";
            case 6:
                return "LX";
            case 7:
                return "LXX";
            case 8:
                return "LXXX";
            case 9:
                return "XC";
        }
    }

    function findHundreds(x) {
        switch (x) {
            case 0:
                return;
            case 1:
                return "C";
            case 2:
                return "CC";
            case 3:
                return "CCC";
            case 4:
                return "CD";
            case 5:
                return "D";
            case 6:
                return "DC";
            case 7:
                return "DCC";
            case 8:
                return "DCCC";
            case 9:
                return "CM";
        }
    }

    function findThousands(x) {
        switch (x) {
            case 0:
                return;
            case 1:
                return "M";
            case 2:
                return "MM";
            case 3:
                return "MMM";
        }
    }

    var arr = [];
    var numRev = num.toString().split('').reverse().join('');

    for (let i = 0; i < num.toString().length; i++) {
        switch (i) {
            case 3:
                arr.push(findThousands(Number(numRev.toString().charAt(i))));
                break;
            case 2:
                arr.push(findHundreds(Number(numRev.toString().charAt(i))));
                break;
            case 1:
                arr.push(findTens(Number(numRev.toString().charAt(i))));
                break;
            case 0:
                arr.push(findUnits(Number(numRev.toString().charAt(i))));
                break;
        }
    }

    showText(arr.reverse().join(''));

}

function moveZeros(arr) {
    let modifiedArr = arr.split('').filter(function(value) { return value !== 0 });
    let zeros = arr.split('').filter(function(value) { return value === 0 });
    return modifiedArr.concat(zeros);

    showText(modifiedArr.join(''));
}

function rot13(str) {
    let toRot = [];
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 !@#$%^&*()_+-=[]{}\|'.split('');
    const rot = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm1234567890 !@#$%^&*()_+-=[]{}\|'.split('');

    for (let i = 0; i < str.length; i++) {
        toRot.push(String.fromCharCode(str.charCodeAt(i) + 13));
    }

    showText(toRot.join(''));
}

function validParentheses(parens) {
    var stack = [];
    const x = {
        ")": "(",
        "}": "{",
        "]": "["
    };

    for (let i = 0; i < parens.length; i++) {
        if (parens[i] == "[" || parens[i] == "{" || parens[i] == "(") {
            stack.push(parens[i]);
        } else if (stack[stack.length - 1] == x[parens[i]]) {
            stack.pop();
        } else {
            showText("false");
            return;
        }
    }
    showText("true")
    return;
}

function toWeirdCase(string) {
    string = string.split(" ");
    var weird = string.map(element => {
        element = element.split("")
        for (let i = 0; i < element.length; i = i + 2) {
            element[i] = element[i].toUpperCase()
        }
        return element.join("")
    })

    showText(weird.join(" "));
}



document.getElementById("value_1").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        rot13(document.getElementById("value_1").value);
        document.getElementById("value_1").value = ""
    }
})