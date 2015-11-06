echo "Starting tests"
SET NODE_ENV=saucelabs
protractor protractor.conf %*
