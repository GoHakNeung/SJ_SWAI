class User {
    constructor(teacher, classNum, passwd) {
        this.teacherNum = teacher; //교사 번호 
        this.classNum = classNum; // 학생 번호
        this.level = 0;
        this.laptime = 0; //걸린시각
        this.score = 0; //점수
        this.dTime = null; //시각
        this.recode = []; //오늘 누가 기록 
    }

    setgetNow() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const date = String(today.getDate()).padStart(2, '0');
        const hours = String(today.getHours()).padStart(2, '0');
        const minutes = String(today.getMinutes()).padStart(2, '0');

        const formattedDateTime = `${year}${month}${date},${hours}:${minutes}`; //20230528,22:15 으로 반환
        return formattedDateTime;
    }

    getAllData() {
        return {
            teacherNum: this.teacherNum,
            classNum: this.classNum,
            level: this.level,
            laptime: this.laptime,
            score: this.score,
            dTime: this.dTime,
            recode: this.recode
        }
    }
}


function makeButton() {

    let btn= "<button class='btnKey' onclick='on(1)'>1</button>" +
        "<button class='btnKey' onclick='on(2)'>2</button>" +
        "<button class='btnKey' onclick='on(3)'>3</button>" +
        "<button class='btnKey' onclick='on(4)'>4</button>" +
        "<button class='btnKey' onclick='on(5)'>5</button>" +
        "<button class='btnKey' onclick='on(6)'>6</button>" +
        "<button class='btnKey' onclick='on(7)'>7</button>" +
        "<button class='btnKey' onclick='on(8)'>8</button>" +
        "<button class='btnKey' onclick='on(9)'>9</button>" +
        "<button class='btnKey' onclick='on(10)'>10</button>" +
        "<button class='btnKey' onclick='showHint();'>힌트</button>";
    return btn;
}

function makePopup(title, text, btns, callback = () => { }) {
    let container = document.createElement('div');
    let divHeader = document.createElement('div');
    let divMain = document.createElement('div');
    let divBottom = document.createElement('div');
    let btn = document.createElement("button");

    divHeader.innerText = title
    divMain.innerHTML = text;
    btn.textContent = btns

    btn.addEventListener("click", () => {
        callback();
        document.body.removeChild(container);
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


function sounds(n) {
    //딩동 울리기 1번은 딩동 2번은 환희.mp3 
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

function getRnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
