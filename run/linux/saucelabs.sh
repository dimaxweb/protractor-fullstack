echo "Starting tests"
export NODE_ENV=saucelabstest
protractor protractor.conf $*
