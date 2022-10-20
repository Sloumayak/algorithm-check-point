function verify(b){
    let a=b.length;
    let c= b.toUpperCase();
   let s=1;
  let count=0;
for(let i=0; i<a;i++){
    if (c[i]=='A' || c[i]== 'E'|| c[i]=='I'||c[i]== 'O'||c[i]=='U'|| c[i]=='Y') {
        count+=1;
    }
    if (b[i]==' '){
       
        s=+1;
    }
}
 return [a,count,s];
}
console.log (verify("hello world."));