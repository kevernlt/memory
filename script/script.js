let dimension = 150;
let img=[];


for (let i = 0; i < 8; i++) {
    const imgStart = Math.floor(Math.random()*100)+1;
    const url = `https://picsum.photos/id/${imgStart}/${dimension}`;
    img.push(url);
}
let cards=[...img,...img];

function shuffle(array){
    for(let i= array.length-1;i>=1;i--){
        const j =Math.floor(Math.random()*i);
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
console.table(shuffle(cards));
