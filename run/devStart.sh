echo "Starting tests"
echo "Clear the reports folder"
cd..
rm reports/*
export NODE_CONFIG_DIR=configuration
protractor lib/runner $*