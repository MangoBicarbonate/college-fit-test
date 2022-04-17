function takevalue(){
    const course91=document.getElementById("c91").value;
    const course92=document.getElementById("c92").value;
    const course93=document.getElementById("c93").value;
    const course94=document.getElementById("c94").value;
    const course95=document.getElementById("c95").value;
    document.write(course91 + course92 + course93);

    localStorage.setItem("NAME", course91);
    localStorage.setItem("SURNAME", surname);

    return;
}
