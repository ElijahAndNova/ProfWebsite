# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Project.create(title: "Artificial Intelligence Stock Picker",

               description: "&nbsp;&nbsp;&nbsp;&nbsp; I wrote this program to analyze patterns on the American stock market and predict which stocks
will rise or fall in price the next day, using a machine learning technique called boosting.
<br> <br>
&nbsp;&nbsp;&nbsp;&nbsp; The code is designed to be run once every day, after the stock market has closed. The user loads in a learning model, which
dictates which parameters to examine and weigh.
<br> <br>
&nbsp;&nbsp;&nbsp;&nbsp; When thse code runs, it uses Google Finance API to deploy a webcrawler. This crawler scours information on the stocks from the
S&P 500 and saves it to a log file marked with the day's timestamp. The parameters examined change based on the learning model used.
<br> <br>
&nbsp;&nbsp;&nbsp;&nbsp; In addition to obtaining the new day's information, the program examines whether its predictions from the previous day were correct.
If the prediction for a given stock was incorrect, the program adjusts how heavily the given parameters are weighted in its prediction
for the following day. The more consecutive days the program runs, the more accurate it will become.",

               image_filepath: "moneymoose.jpg")

Project.create(title: "3D Engine - Built From Scratch",

               description: "&nbsp;&nbsp;&nbsp;&nbsp; A powerful work-in-progress 3D engine written from scratch in Java, using only OpenGL.
I intend to eventually expand this project in to a multiplayer game, but many more foundations must be laid before it's
ready for gameplay elements. Currently, the engine features include:
<br> <br>
<ul> <li> .obj file parsing (allowing the use of imported models, easily created in Blender) </li> <li> per-pixel and specular lighting
provides real-time dynamic lighting on all entities and terrain (shadows to come!) </li>
<li> vertex and fragment shading adds nuances to entity lighting</li>  <li> transparency and fog clips render distance smoothly
</li> <li>terrain generation with external heightmap file input</li> <li>third person camera and player + gravity physics</li></ul>
<br>
&nbsp;&nbsp;&nbsp;&nbsp; Many more features to come!",

               image_filepath: "comet.png")

Project.create(title: "SkyBit: 'Siri' for the Computer",

               description: "&nbsp;&nbsp;&nbsp;&nbsp; This program began as a computer companion, designed to run in the background
until it was needed; a combination of keyboard key presses would bring the console to the forefront of the user's screen, where they could
enter a wide range of commands.
<br> <br>
&nbsp;&nbsp;&nbsp;&nbsp; As my astronomy research continued, I needed to write code that produced visual output; rather than starting from scratch,
I merged the two projects. My computer companion gained the functionality to run complex simulations and display the result
in its already fleshed-out system of display frames. SkyBit quickly became a tool to my research, with added functionality on the side.
<br> <br>
&nbsp;&nbsp;&nbsp;&nbsp; SkyBit's dynamic display provides real time information about your computer. Depending on the colors
smoldering in the background and the ebb and flow of the pattern shown, the user could use SkyBit to easily track statistics such
as computer memory being used in simulations and bits of data generated per second (FITS image files are huge).
In addition to helping manage memory, SkyBit makes it easy to run specialized web searches, check the local weather,
ping your email, and more.",

               image_filepath: "skybit.png")

Project.create(title: "Exoplanet Research PyKLIP Wrapper",

               description: "&nbsp;&nbsp;&nbsp;&nbsp; My primary field of research is in exoplanet direct imaging. One of the final steps in reducing data
using this technique involves executing principal component analysis to sort out starlight from planetary light. To do this,
we use <a target='_blank', href='https://bitbucket.org/pyKLIP/pyklip'>PyKLIP</a>, a PCA tool written by
<a target='_blank', href='http://w.astro.berkeley.edu/~jwang/'>Jason Wang</a>.
<br> <br>
&nbsp;&nbsp;&nbsp;&nbsp; PyKLIP has several parameters that can be tweaked to change the result; every data set has different optimal parameter
settings. To mitigate this confusion, I created a GUI that sets up an automated parameter space search on a given data set.
<br> <br>
&nbsp;&nbsp;&nbsp;&nbsp; This program makes it easy to set up and run several hundred PyKLIP processes, each of which can take hours to run. I wrote
auxiliary helper code to analyze the output of the PyKLIP algorithm and evaluate its 'goodness' through signal to noise ratio mapping.
The end result is a 3-dimensional data cube which reveals the optimal parameter combination for a data set.
<br> <br>
&nbsp;&nbsp;&nbsp;&nbsp; This project was written in Python and Java, and is tied together with a Bash script.",

               image_filepath: "pyklip.png")


Picture.create(image_filepath: "me1.jpg", width:342, height:342)
Picture.create(image_filepath: "me2.jpg", width:342, height:342)
Picture.create(image_filepath: "me3.jpg", width:342, height:342)
Picture.create(image_filepath: "me4.jpg", width:342, height:342)
Picture.create(image_filepath: "new2.jpg", width:342, height:342)
Picture.create(image_filepath: "new4.jpg", width:342, height:342)


Coming.create(image_filepath: "new4.jpg")
Coming.create(image_filepath: "me1.jpg")
Coming.create(image_filepath: "me2.jpg")
Coming.create(image_filepath: "me3.jpg")
Coming.create(image_filepath: "me4.jpg")
Coming.create(image_filepath: "new2.jpg")


Leaving.create(image_filepath: "me2.jpg")
Leaving.create(image_filepath: "me3.jpg")
Leaving.create(image_filepath: "me4.jpg")
Leaving.create(image_filepath: "new2.jpg")
Leaving.create(image_filepath: "new4.jpg")
Leaving.create(image_filepath: "me1.jpg")
