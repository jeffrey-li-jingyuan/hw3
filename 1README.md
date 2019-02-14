# hw3
</b>
What code draws the blades of grass?
</b>
"line(x, height-10, x+random(-10, 10), height-10-random(h))" draws the blades of the grass.</b>
"stroke(random(60, 70), 100, 90);" under function draw decides the colors of the grass.</b>
What code makes the "lawnmower" come by? How often does it come by?</b>
"if (random() > 0.999) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;
  }" makes the lawnmover. It shows up very rare, about one out of a thousand chance.</b>
What's the point of the h variable?</b>
It helps determine the height of the grass. h is the distance of the point from the bottom of the image.
What does the -10 do in the second and fourth arguments of the line function, height-10-random(h)? Why is it there?</b>
This part of argument determines the height of the grass. The greater the h, the higher the grass.
