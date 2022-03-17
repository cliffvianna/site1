function piramide(b) {
    for (let a = 1; a <= b; a++) {
       let str = ' '.repeat(b - a);
       let str2 = '#'.repeat(a * 2 - 1);
       console.log(str + str2 + str);
    }
 }
 piramide(7)