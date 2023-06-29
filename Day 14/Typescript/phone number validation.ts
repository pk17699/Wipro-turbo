function check_num(num:string):number{
    let regexp: RegExp = /\d{2}[-]\d{3}[-]\d{5}/
    if(!num || num.length===0){
        return -1;
    }
    else if(regexp.test(num)){
        return 1;
    }
    else return 0;
}

console.log(check_num('99-080-99989'));