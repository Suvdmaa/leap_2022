let data = ['Засгийн', 'газарт', '6.4', 'сая', 'тонн', 'нүүрс', 'алдагдсан', 'гэх', 'мэдээлэл', 'ирээгүй', 'байна.', 'Бодит', 'байдалд', 'ийм', 'их', 'хэмжээний', 'нүүрс', 'алдагдсан', 'гэх', 'асуудал', 'эргэлзээтэй', 'байна.', 'Хууль', 'хяналтын', 'байгууллага', 'хяналт', 'шалгалтын', 'ажил', 'явуулж', 'байна'];

function getWordCount(){
    let map = {};
    for(let i = 0; i < data.length; i++){
        let item = data[i];
         map[item] = (map[item]) + 1 || 1
        }
    return map;
}

let word = prompt("Give me your word")
getWordCount(word);