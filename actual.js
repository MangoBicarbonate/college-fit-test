var course1;
var course2;
var course3;
var course4;
var course5;
var course6;

function greetings(){
    course1 = document.getElementById("c1").value;
    course2 = document.getElementById("c2").value;
    course3 = document.getElementById("c3").value;
    course4 = document.getElementById("c4").value;
    course5 = document.getElementById("c5").value;
    course6 = document.getElementById("c6").value;
    window.location.href="results.html";
}

document.getElementById("m1").innerHTML = m1;
document.getElementById("m2").innerHTML = m2;
document.getElementById("m3").innerHTML = m3;
document.getElementById("m4").innerHTML = m4;
document.getElementById("m5").innerHTML = m5;
document.getElementById("m6").innerHTML = m6;

document.getElementById("m1d").innerHTML = m1d;
document.getElementById("m2d").innerHTML = m2d;
document.getElementById("m3d").innerHTML = m3d;
document.getElementById("m4d").innerHTML = m4d;
document.getElementById("m5d").innerHTML = m5d;
document.getElementById("m6d").innerHTML = m6d;

document.getElementById("hm1").innerHTML = hm1;
document.getElementById("hm2").innerHTML = hm2;
document.getElementById("hm3").innerHTML = hm3;

document.getElementById("hm1d").innerHTML = hm1d;
document.getElementById("hm2d").innerHTML = hm2d;
document.getElementById("hm3d").innerHTML = hm3d;

course1 = course1.toUpperCase();
course2 = course2.toUpperCase();
course3 = course3.toUpperCase();
course4 = course4.toUpperCase();
course5 = course5.toUpperCase();
course6 = course6.toUpperCase();

var debug = new Boolean(true);
var serial = "";

var x = course1;

for (var i = 1; debug == true; i++){
    if (i == 1){
      x = course1;
    }
    else if (i == 2){
      x = course2;
    }
    else if (i == 3){
      x = course3;
    }
    else if (i == 4){
      x = course4;
    }
    else if (i == 5){
      x = course5;
    }
    else if (i == 6){
      x = course6;
    }
    else{
      break;
    }
      if (debug == x.includes("ALGEBRA")||debug == x.includes("CALC")){
      serial += "A";
    }
      if (debug == x.includes("BIO")||debug == x.includes("HEALTH")){
      serial += "B";
    }
      if (debug == x.includes("PROGRAMMING")||debug == x.includes("COMPUTER")){
      serial += "C";
    }
      if (debug == x.includes("DESIGN")) {
      serial += "D";
    }
      if (debug == x.includes("ENGI")) {
      serial += "E";
    }
      if (debug == x.includes("FOOD")) {
      serial += "F";
    }
      if (debug == x.includes("ACCOUNT")||debug == x.includes("FINANCE")){
      serial += "G";
    }
      if (debug == x.includes("ENGLISH")||debug == x.includes("WRITING")){
      serial += "H";
    } 
      if (debug == x.includes("JOURNAL")) {
      serial += "I";
    } 
      if (debug == x.includes("ART")||debug == x.includes("PHOTO")){
      serial += "J";
    } 
      if (debug == x.includes("BUSI")||debug == x.includes("MARKET")){
      serial += "K";
    } 
      if (debug == x.includes("ACTING")||debug == x.includes("DRAMA")){
      serial += "L";
    }
      if (debug == x.includes("HISTORY")||debug == x.includes("GEO")){
      serial += "M";
    }
      if (debug == x.includes("LAW")||debug == x.includes("GOV")){
      serial += "N";
    }
}

function countOccurences(string, word) {
   return string.split(word).length - 1;
}

var count= 1;
var highmatch = [];
var match = [];

function getMajor(serial) {
  if (debug == serial.includes("A")){
      count=countOccurences(serial,"A");
      if (count > 1){
       highmatch.push("Math");
      }
      else{
       match.push("Math");
      }
    }
  if (debug == serial.includes("B")){
      count=countOccurences(serial,"B");
      if (count > 1){
       highmatch.push("Biology");
      }
      else{
       match.push("Biology");
      }
    }
  if (debug == serial.includes("C")){
      count=countOccurences(serial,"C");
      if (count > 1){
       highmatch.push("Computer Science");
      }
      else{
       match.push("Computer Science");
      }
    }
  if (debug == serial.includes("D")){
      count=countOccurences(serial,"D");
      if (count > 1){
       highmatch.push("Design");
      }
      else{
       match.push("Design");
      }
    }
  if (debug == serial.includes("E")){
      count=countOccurences(serial,"E");
      if (count > 1){
       highmatch.push("Engineering");
      }
      else{
       match.push("Engineering");
      }
    }
  if (debug == serial.includes("F")){
      count=countOccurences(serial,"F");
      if (count > 1){
       highmatch.push("Food & Nutrition");
      }
      else{
       match.push("Food & Nutrition");
      }
    }
  if (debug == serial.includes("G")){
      count=countOccurences(serial,"G");
      if (count > 1){
         highmatch.push("Economics");
      }
      else{
       match.push("Economics");
      }
    }
  if (debug == serial.includes("H")){
      count=countOccurences(serial,"H");
      if (count > 1){
       highmatch.push("English");
      }
      else{
       match.push("English");
      }
    }
  if (debug == serial.includes("I")){
      count=countOccurences(serial,"I");
      if (count > 1){
       highmatch.push("Journalism");
      }
      else{
       match.push("Journalism");
      }
    }
  if (debug == serial.includes("J")){
      count=countOccurences(serial,"J");
      if (count > 1){
         highmatch.push("Art");
      }
      else{
       match.push("Art");
      }
    }
  if (debug == serial.includes("K")){
      count=countOccurences(serial,"K");
      if (count > 1){
        highmatch.push("Business");
      }
    else{
       match.push("Business");
      }
    }
  if (debug == serial.includes("L")){
      count=countOccurences(serial,"L");
      if (count > 1){
        highmatch.push("Film");
      }
      else{
       match.push("Film");
      }
    }
  if (debug == serial.includes("M")){
      count=countOccurences(serial,"M");
      if (count > 1){
        highmatch.push("History");
      }
      else{
       match.push("History");
      }
    }
  if (debug == serial.includes("N")){
      count=countOccurences(serial,"N");
      if (count > 1){
        highmatch.push("Political Science");
      }
    else{
       match.push("Political Science");
      }
    }
  return [match, highmatch];
}

var major = getMajor(serial);
match = major[0];
highmatch = major[1];

var m1 = match[0];
var m2 = match[1];
var m3 = match[2];
var m4 = match[3];
var m5 = match[4];
var m6 = match[5];

var hm1 = highmatch[0];
var hm2 = highmatch[1];
var hm3 = highmatch[2];

var x;
var desc;

function getDesc(m){
  if (m == "Math"){
    return `Mathematics majors study the relationships between numbers, structures and patterns. Their classes range from algebra to statistics, and the concepts build on one another. Students learn skills like logic, analysis, abstract thinking and problem solving, which are valuable to future employers.`;
  }
  if (m == "Computer Science"){
    return `A computer science major involves the study of computers and programming languages. Majoring in this field will help you develop great technical skills and give you a new perspective on problem-solving. You'll learn how to break problems apart and execute them effectively.`;
  }
  if (m == "Biology"){
    return `A biology major is a field of undergraduate study that focuses on living things such as bacteria, animals and plants. Students may concentrate on learning about the overall field or on a particular specialty.`;
  }
  if (m == "Design"){
    return `Design majors take courses in several different areas of study including art history, modeling, drafting, computer programming, studio art, typography and more.`;
  }
  if (m == "Engineering"){
    return `An engineering major is an interdisciplinary study of math, science and some business principles. General engineering courses teach students how to design and conduct experiments, to identify and solve problems, to understand professional and ethical responsibility, and to communicate effectively.`;
  }
  if (m == "Food & Nutrition"){
    return `Nutrition majors study the relationship between nutrients in food and the human body. Nutrition majors draw on fields ranging from social sciences to biology and chemistry as they learn how dietary patterns affect human health.`;
  }
  if (m == "Economics"){
    return `An economics major is a degree option that examines questions related to resource allocation, incentives and wealth, among others. Economics is relevant to graduate and professional study in fields like business management, law and public affairs, as well as undergraduate degrees that are useful for many career paths.`;
  }
  if (m == "English"){
    return `An English major is a humanities degree option that comes with plenty of opportunities for students to explore different styles of expression. An undergraduate background in English is useful for graduate and professional programs in fields like journalism, law and business. Majors will likely start their studies in classes designed to train them as readers and writers. Higher-level courses cover topics like creative writing, critical theory and literary history. The major provides ample academic and creative opportunities, allowing students to study key figures while also improving as playwrights, poets or novelists, if they so choose.`;
  }
  if (m == "Journalism"){
    return `Journalism degrees give students practical experience in gathering credible sources, determining the truth, writing concisely and effectively, and relaying valuable and engaging stories to the public. Journalists deliver information through online video, television broadcasts, and print media.`;
  }
  if (m == "Art"){
    return `As an art major, you will understand the role of the artist within a variety of historical and contemporary contexts. You will use creative practices and research methods as a means of exploring interdisciplinary methods of inquiry that promote excellence in the arts. Apply your knowledge to real-world situations through hands-on learning opportunities. Internships and community projects with local business and arts organizations are personally and professionally enriching and often lead to employment after graduation. Discover a lifelong appreciation and understanding of the visual arts. The skills forged within this program will prepare you to produce meaningful work and develop creative abilities that can be applied to a variety of fields.`;
  }
  if (m == "Business"){
    return `A business major is for students seeking a broad-based education in many areas of business, with the option to specialize. Students will learn how different types of companies function in local and global economies. With a business/commerce general major, students have broad career options. General management, business ownership and employment at a corporation are all viable career paths for those with a business background.`;
  }
  if (m == "Film"){
    return `Film majors work independently and in teams with their peers to learn how to produce ideas from script to screen. They study a rigorous and hands-on curriculum to grasp the roles of sound, lighting, editing and other aspects of creating a film.`;
  }
  if (m == "History"){
    return `History majors engage in rigorous explorations of the past, moving through time and space to develop a nuanced understanding of societies and cultures. At the same time, they will become adept critical thinkers and writers, abilities that are useful within and well beyond the field of history. Students who are eager to make sense of complex stories and consider diverse perspectives on the past could be a good fit for undergraduate history programs.`;
  }
  if (m == "Political Science"){
    return `A political science major is a social science degree path that requires students to study government in theory and practice. Majors will explore topics related to political theory, international relations, comparative politics and more.`;
  }
  else{
    return;
  }
}

var m1d = getDesc(m1);
var m2d = getDesc(m2);
var m3d = getDesc(m3);
var m4d = getDesc(m4);
var m5d = getDesc(m5);
var m6d = getDesc(m6);


var hm1d = getDesc(hm1);
var hm2d = getDesc(hm2);
var hm3d = getDesc(hm3);
