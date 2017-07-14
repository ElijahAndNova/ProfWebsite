# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Project.create(title: "Comet Colosseum", description: "A powerful 3D engine written from scratch in Java, using only OpenGL.
Features include: <br> <br> <ul> <li> .obj file parsing (allowing the use of imported models) </li> <li> per-pixel and specular lighting </li>
 <li> vertex and fragment shading </li>  <li> transparency </li> <li> fog </li> <li>terrain</li>
<li>third person camera</li></ul>", image_filepath: "comet_collosseum.png")

Project.create(title: "SkyBit", description: "A computer companion program written in Java. Functions similarly to Siri; the program
runs continuously as a background process (taking very little CPU), and jumps to the front of the user's screen when a combination of buttons is
pressed. Intended to assist the user with: <br> <br> <ul> <li> smart web searches </li> <li> computer memory management </li>
<li> build-a-screensaver tool (elegant and <i>fast!</i>)</li> <li> running simulations to help with astronomical data reduction </li>
<li> weather tracking </li> <li> note management </li></ul>", image_filepath: "skybit.png")

Project.create(title: "PyKLIP Wrapper", description: "Bullshit 2", image_filepath: "github_logo.png")

Project.create(title: "Money Moose", description: "Bullshit 2", image_filepath: "github_logo.png")


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
