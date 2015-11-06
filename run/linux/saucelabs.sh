echo "Starting tests"
export NODE_ENV=saucelabs
protractor protractor.conf $*
