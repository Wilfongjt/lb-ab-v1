#source ./__scripts/00.settings.sh
## http://postgrest.org/en/v6.0/install.html#postgresql-dependency
##docker inspect -f "{{.Config.Env}}" postgrest/postgrest
#cd ${MY_APPNAME}/
#ls
#docker inspect -f "{{.Config.Env}}" postgrest
#docker-compose run web npm run test

# run tests in a docker container
#cd lb-ab/
#ls
docker-compose run hapi npm run test
