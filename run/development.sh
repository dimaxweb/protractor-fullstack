echo "Starting tests"
export NODE_ENV=development
protractor protractor.conf $*
