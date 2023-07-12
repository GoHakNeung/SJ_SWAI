
function 랜덤수만들기(min, max, count) {
    const nums = [];
    while (nums.length < count) {
        const num = Math.floor(Math.random() * (max - min + 1) + min);
        if (!nums.includes(num)) nums.push(num);
    }
    return nums;
}

function 랜덤수(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function 버튼만들기() { // 버튼 만들기 
    var btn = 
    "<button class='숫자버튼' onclick='on(1)'>1</button>" +
        "<button class='숫자버튼' onclick='on(2)'>2</button>" +
        "<button class='숫자버튼' onclick='on(3)'>3</button>" +
        "<button class='숫자버튼' onclick='on(4)'>4</button>" +
        "<button class='숫자버튼' onclick='on(5)'>5</button>" +
        "<button class='숫자버튼' onclick='on(6)'>6</button>" +
        "<button class='숫자버튼' onclick='on(7)'>7</button>" +
        "<button class='숫자버튼' onclick='on(8)'>8</button>" +
        "<button class='숫자버튼' onclick='on(9)'>9</button>" +
        "<button class='숫자버튼' onclick='on(10)'>10</button>" +
        "<button class='숫자버튼' onclick='힌트보이기();'>힌트</button>";
    return btn;
}

function 버튼만들기1() { // 버튼 만들기 
    var btn = 
    "<button class='숫자버튼' onclick='on(1)'>1</button>" +
        "<button class='숫자버튼' onclick='on(2)'>2</button>" +
        "<button class='숫자버튼' onclick='on(3)'>3</button>" +
        "<button class='숫자버튼' onclick='on(4)'>4</button>" +
        "<button class='숫자버튼' onclick='on(5)'>5</button>" +
        "<button class='숫자버튼' onclick='on(6)'>6</button>" +
        "<button class='숫자버튼' onclick='on(7)'>7</button>" +
        "<button class='숫자버튼' onclick='on(8)'>8</button>" +
        "<button class='숫자버튼' onclick='on(9)'>9</button>" +
        "<button class='숫자버튼' onclick='on(0)'>0</button>" 
    return btn;
}



function sounds(n) {  //딩동 울리기 1번은 딩동 2번은 환희.mp3 
    const audio1 = new Audio('audio/dingdong.mp3');
    const audio2 = new Audio('audio/ddang.wav');
    const audio3 = new Audio('audio/upscale.wav');

    switch (n) {
        case 1:
            audio1.play();
            break;
        case 2:
            audio2.play();
            break;
        case 3:
            audio3.play();
            break;
        default:
            break;

    }
}





function 팝업창만들기(title, text, btns, callback=()=>{}) {
    let container = document.createElement('div');
    let divHeader = document.createElement('div');
    let divMain = document.createElement('div');
    let divBottom = document.createElement('div');
    let btn = document.createElement("button");

    divHeader.innerText = title
    divMain.innerHTML = text;
    btn.textContent=btns
    
    btn.addEventListener("click", function () {
        document.body.removeChild(container);
        callback();
});

    container.id = 'pop_container';
    divHeader.id = 'pop_header';
    divMain.id = 'pop_main';
    divBottom.id = 'pop_bottom';

    divBottom.appendChild(btn);
    container.appendChild(divHeader);
    container.appendChild(divMain);
    container.appendChild(divBottom);
    document.body.appendChild(container);
}
