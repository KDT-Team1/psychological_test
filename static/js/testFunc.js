// txt파일을 읽어서 배열로 반환하는 함수
async function readTextFile(file) {
    var openedFile = await fetch(file);
    var text = await openedFile.text();
    var lines = text.split(/\r\n|\n/);
    return lines;
}


let testLines = readTextFile("test.");