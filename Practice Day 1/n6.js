let friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let temp = 0;
let result ;

for(let i=0;i<friends.length;i++)
{
    if(friends[i].length > temp)
    {
        result=friends[i];
        temp = friends[i].length;
    }
}

console.log(result);