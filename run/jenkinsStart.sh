echo "Starting tests"
echo "Clear the reports folder"
cd ..
rm reports/*
export NODE_ENV=jenkins
protractor conf $*