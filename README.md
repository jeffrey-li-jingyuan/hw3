# hw3
<br>
What code draws the blades of grass?<b/>
<br>
"line(x, height-10, x+random(-10, 10), height-10-random(h))" draws the blades of the grass.<br>
"stroke(random(60, 70), 100, 90);" under function draw decides the colors of the grass.<br>
What code makes the "lawnmower" come by? How often does it come by?<br><b/>
"if (random() > 0.999) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;
  }" makes the lawnmover. It shows up very rare, about one out of a thousand chance.<br>
What's the point of the h variable?<br><b/>
It helps determine the height of the grass. h is the distance of the point from the bottom of the image.<br>
What does the -10 do in the second and fourth arguments of the line function, height-10-random(h)? Why is it there?<br><b/>
This part of argument determines the height of the grass. The greater the h, the higher the grass.
<br>
<br>
<br>


What's the point of an object?<br>
A set object could provide a set of datas, which is helpful to bundle up datas. 
What's an example of a range you might use for the map function?<br>
I can map the width / height of the canvas related to color range, for instance, map a 400px wide canvas with 256 rgb values.<br>
What line of code would give me a random year in the last century?<br>
Under function draw, "text(int(random(1900, 2000)), 10, 10, 70, 80);" would do the job.
