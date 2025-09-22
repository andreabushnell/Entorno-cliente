for (i=9; i<21;i++){
    for (j=0; j<60; j++) {
        if (j%5==0){
            if (j.toString().length>1){
                document.write(i+":"+j+"<br>");
            }
            else document.write(i+":0"+j+"<br>");
        }
    }
}
document.write("21:00");