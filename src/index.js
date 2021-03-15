
module.exports = function check(str, bracketsConfig) {
    // let brackets={
    //        '(': '(',
    //        '[': '[',
    //        '{': '{',
    //        '|':'|'
    // };
    // const st=[];
    // for (i = 1; i < str.length; i++) {
    //     if (close(str[i])) {
    //         if (brackets[str[i]]!==st.pop()) return false;
    //     } else {
    //         if (str[i]!==str[i+1]){
    //         st.push(str[i]);}
    //     }
        
    // }
    // if (st.length===0 && str.length%2===0) {
    //     return true;
    // } else return false;


    let st = [];
    let newBrackets = {};
    for(let i = 0; i < bracketsConfig.length; i += 1) {
      newBrackets[bracketsConfig[i][0]] = bracketsConfig[i][1];
    }
  
    st.push(str[0]);

    for(let j = 1; j < str.length; j += 1) {
      if(str[j] == newBrackets[st[st.length - 1]]) {
        st.pop();
      } else {
        st.push(str[j]); 
      }
    }
    if (st.length > 0) {return false;}
    return true;

};
