FROM mysql:latest
RUN mkdir /home/database
WORKDIR /home/database
COPY . .
RUN mysql -u root < db1.sql
