docker build --no-cache -f SQL\Dockerfile.PostgreSql -t avtomatizaciya_zakupok5-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t avtomatizaciya_zakupok5-java/app ../../..
