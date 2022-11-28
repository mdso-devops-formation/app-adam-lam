FROM ubuntu
RUN /app
COPY . /app
WORKDIR /app
ENV FLASK_APP=backup FLASK_ENV=development
RUN apt install python \
	pip \
	flask
EXPOSE 5000
CMD ["flask", "run"]
