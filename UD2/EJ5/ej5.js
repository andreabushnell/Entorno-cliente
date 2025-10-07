for (i=9; i<=21;i++){
    document.write(i+":"+"00<br>");
    for (j=0; j<4; j++) {
        if (j==3){
            document.write(i+":"+j+"0<br>");
        }
    }
}