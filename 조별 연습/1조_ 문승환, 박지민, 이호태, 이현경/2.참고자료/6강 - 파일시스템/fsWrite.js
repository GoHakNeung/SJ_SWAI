const fs = require("fs");
const path = require("path");

function 쓰기(filePath,content) {
  fs.writeFile(filePath, content, (err) => {
    if (err) throw err;
    console.log("파일이 저장되었습니다");
  });
}

function 동기읽기() {
  // 이것을 할 때는 다른 것은 할 수 없음
  var data = fs.readFileSync("./fswrite.txt");
  console.log(data.toString());
}

function nonSync() {
  // 비동기로 읽을때에는 리턴이 없기에 콜백함수 사용 반환

  var data = fs.readFile("./fswrite.txt", (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  });
}

function contentChange() {
  var data = fs.readFile("./fswrite.txt", (err, data) => {
    let content = data.toString();
    content = content.replace("안녕", "빠빠이");
    쓰기("./test.txt",content);
  });
}

function appendContent() {
  let list = [1, 2, 3, 4, 5];
  list.forEach((item) =>
    fs.appendFileSync("./chapter.txt", `chapters:${item}\n`)
  );
}

function makeDirectory() {
  // 디렉토리 만들기
  try {
    var path1 = path.join(__dirname, "testDir");

    if (!fs.existsSync(path1)) {
      fs.mkdirSync(path1);
    }
  } catch (e) {
    console.error;
  }
}

function fileList() { // 파일 리스트를 만드는 것 
  try {
    var path1 = path.join(__dirname, "");
    const fileList = fs.readdirSync(path1);
    fileList.sort()
    fileList.forEach((fileList) => {
      console.log(fileList);
    });
  } catch (error) {
    console.error;
  }
}

function saveJSON(){
    const userList = [
        {name: 'John', age:31},
        {name: 'Moon', age:32},
        {name: 'Kim', age:33},
         ];
 쓰기('./list.json',JSON.stringify(userList))
}


function loadJSON(){
    fs.readFile('./list.json',(err, data) => {
        const jsonData = JSON.parse(data.toString());
        jsonData.forEach((item) => {
            console.log("name:",item.name,"age:",item.age);
    })})}

function fileNameChange(fromFile,toFile){
    fs.rename(fromFile,toFile,(err)=>{
        if(err) throw err;
        console.log("name:",fromFile ,'=>',toFile,'  changed');
    })
}

fileNameChange('chapter.txt','c.txt');
