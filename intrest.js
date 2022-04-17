window.addEventListener("load", () => {

    const params = (new URL(document.location)).searchParams;
    const math1 = params.get("math1");
    const math2 = params.get("math2");

    document.getElementById("math1").innerHTML = math1;
    document.getElementById("math2").innerHTML = math2;
})
