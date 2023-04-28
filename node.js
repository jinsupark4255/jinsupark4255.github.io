let input = require('fs').readFileSync('dev/stdin').toString().split(' ');
const H = parseInt(input[0]);  // 시
const M = parseInt(input[1]);  // 분


let rH,rM;
if(H==0){
    if(M<45){
        rH=23;
        rM=60-(45-M);
    }
    
    else{
        rH = H;
        rM=M-45;
    }
}
else{
    if(M<45){
        rH=H-1;
        rM=60-(45-M);
    }
    
    else{
        rH = H;
        rM=M-45;
    }
}

console.log(rH,rM);