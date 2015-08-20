echo "Starting tests"
echo "Clear the reports folder"
cd..
rm reports/*
protractor lib/runner $*