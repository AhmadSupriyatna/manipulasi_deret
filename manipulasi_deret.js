function deretAngka(n) {
    var deret = '';
    for(i=1;i<=n;i++){
       if(i%3==0){
           deret +=" NIO "
       }
       else if(i%5 == 0) {
           deret +=" MIC "
       }else{
           deret += i+ ' '
       }
    }
    return deret
   }
   console.log(deretAngka(10))
   console.log(deretAngka(20))
   console.log(deretAngka(30))