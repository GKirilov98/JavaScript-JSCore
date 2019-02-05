function cookByNum(arr) {
    let num = +arr[0];
    for (let i = 1; i < arr.length; i++) {
        switch (arr[i]) {
            case 'chop':
                num /= 2;
                console.log(num);
                break;
            case 'dice':
                for (j = 1; j <= num; j++ ){
                    if (j * j === num){
                        num = j;
                        break;
                    }
                }

                console.log(num);
                break;
            case 'spice':
                num ++;
                console.log(num);
                break;
            case 'bake':
                num *= 3;
                console.log(num);
                break;
            case 'fillet':
                num *= 0.8;
                console.log(num);
                break;
        }
    }
}

cookByNum(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);