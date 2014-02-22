
set -o errexit 
set -o xtrace

sudo apt-get install npm
pushd src/webext
test -d node_modules/connect || npm install connect
popd

# ... Java 7
# wget https://oss.sonatype.org/content/repositories/snapshots/org/projectodd/nodyn-standalone/0.1.1-SNAPSHOT/nodyn-standalone-0.1.1-20140220.153732-3-shaded.jar
# java -jar nodyn-standalone-0.1.1-20140220.153732-3-shaded.jar
