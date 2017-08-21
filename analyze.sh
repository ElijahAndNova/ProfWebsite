echo "Analyzing patterns from the day's web traffic..."

#killall firefox

open -a /Applications/Firefox.app

javac analyze.java
java analyze

echo "Done"