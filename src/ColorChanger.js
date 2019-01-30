import React from 'react';

function ColorChanger(){
    const styles = {
        fontSize: 30
    }
    let date = new Date()
    let timeNow = date.getSeconds();
    if (timeNow % 2 === 0){
        styles.color = "blue"
    }
    else{
        styles.color = "red"
    }
    return(
        <p style={styles}>I am king !</p>
    )
}
export default ColorChanger;