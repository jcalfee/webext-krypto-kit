
set -o errexit 
set -o xtrace

# Static Web Server
# An alternative to "connect" https://github.com/nodeapps/http-server
sudo apt-get install npm
pushd src/webext
# ... npm installs over https and may have trouble validating the 
# ... certificute.  A work-around is to use http instead:
# npm set registry http://registry.npmjs.org/
test -d node_modules/connect || npm install connect
popd

# ... Java 7
# wget https://oss.sonatype.org/content/repositories/snapshots/org/projectodd/nodyn-standalone/0.1.1-SNAPSHOT/nodyn-standalone-0.1.1-20140220.153732-3-shaded.jar
# java -jar nodyn-standalone-0.1.1-20140220.153732-3-shaded.jar
