# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Project.create(description: "Powerful 3D engine written from scratch in Java, using only OpenGL.\n Features include .obj file parsing
(allowing the use of imported models), per-pixel \nand specular lighting, vertex and fragment shading, transparency, fog, terrain, and a
 third person \n camera.\ntest", image_filepath: "comet_collosseum.png")

Project.create(description: "Bullshit 2", image_filepath: "github_logo.png")

Project.create(description: "Bullshit 3", image_filepath: "github_logo.png")