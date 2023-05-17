function setup() {
    createCanvas(1000, 1000);
     strokeWeight(0,5);
   fill(0, 80, 75);
   quad(0,0,0,500,500,500,500,0);
   fill(41,51,71);
   quad(500,0,500,500,1000,500,1000,0);
   fill(187,176,177);
   quad(0,500,0,1000,500,1000,500,500);
   fill(105,87,109);
   quad(500,500,500,1000,1000,1000,1000,500);
   
   
   //primer cuadrado
   fill(1,75,67 );
   beginShape();
   vertex(205,15);
   vertex(10,150);
   vertex(85,190);
   vertex(380,90);
   vertex(440,37);
   endShape(CLOSE);
   
   fill(35, 47, 44);
   quad (10,150,100,350,205,450,85,190);
   
   fill(	38, 66, 67);
   triangle(205,450,245,475,335,415);
   
   fill(	92, 160, 167);
   quad(440,37,380,90,335,415,475,280);
   
   fill(19, 19, 19);
   quad(85,190,205,450,335,415,380,90);
   
   stroke(255, 153, 68);
   strokeWeight(1);
   line(85,190,205,450);
   
   strokeWeight(2);
   line(205,450,335,415);
   
   strokeWeight(3)
   line(335,415,380,90);
   
   strokeWeight(1);
   line(380,90,85,190);
   
   stroke(39,68,71);
   strokeWeight(1);
   line(205,15,250,133);
   
   stroke(18, 64, 60);
   line(245,475,235,445);
   
   //segundo cuadrado
   noStroke();
   fill(	38, 35, 53);
   quad(888,140,715,225,755,445,975,350);
   
   fill(	53, 71, 91,175);
   quad(725,7.5,520,175,540,395,780,225);
   
   fill(	79, 111, 145,70);
   quad(745,130,540,275,735,345,925,235);
   
   noFill();
   stroke(0);
   strokeWeight(0.3);
   line(540,395,755,445);
   line(725,0.7,888,140);
   
   strokeWeight(1);
   quad(780,50,575,190,675,430,880,315);
   
   stroke(	214, 218, 214);
   quad(825,75,655,235,645,420,920,320);
   quad(650,70,605,350,865,395,865,155);
   
   //tercer cuadrado
   stroke(0);
   strokeWeight(1);
   fill(	235, 224, 200);
   quad(235,515,230,740,253,755,485,615);
   
   fill(	192, 199, 208);
   triangle(253,755,425,860,485,615);
   
   fill(	164, 166, 164);
   triangle(45,850,220,995,215,750);
   
   fill(184, 185, 203);
   quad(230,740,215,750,220,995,425,860);
   
   noFill()
   stroke(46, 45, 136);
   quad(375,570,90,675,150,935,360,820);
   
   fill(97, 102, 101);
   quad(235,515,15,615,45,850,230,740);
   
   noFill()
   stroke(0)
   strokeWeight(0.7)
   quad(110,570,140,795,285,950,390,675);
   
   stroke(255)
   quad(234,580,35,760,220,950,450,755);
   
   stroke(0)
   strokeWeight(0.7)
   line(245,510,5,620);
   line(15,605,45,850);
   line(5,605,220,780);
   line(220,995,215,780);
   line(205,785,485,615);
   line(230,740,35,855);
   line(220,995,35,840);
   line(485,615,225,510);
   
   //cuarto cuadrado
   fill(	143, 125, 165);
   beginShape();
   vertex(655,515);
   vertex(525,705);
   vertex(555,950);
   vertex(625,860);
   vertex(685,575);
   endShape(CLOSE);
   
   fill(123, 89, 134);
   beginShape();
   vertex(655,515);
   vertex(685,575);
   vertex(910,750);
   vertex(990,770);
   vertex(860,600);
   endShape(CLOSE);
   
   fill(161, 147, 191);
   beginShape();
   vertex(625,860);
   vertex(555,950);
   vertex(819,980);
   vertex(990,770);
   vertex(910,750);
   endShape(CLOSE);
   
   fill(	19, 19, 19);
   triangle(685,575,625,860,910,750);
   
   stroke(238, 107, 139);
   strokeWeight(3);
   line(685,575,625,860);
   line(625,860,910,750);
   line(910,750,685,575);
   
   stroke(37, 109, 141);
   strokeWeight(1);
   line(525,705,645,750);
   line(819,980,750,815);
   
 }
 
 function draw() {
 }