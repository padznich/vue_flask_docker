FROM python:3.6-alpine
WORKDIR /
ADD ./code/p1/requirements.txt .
#RUN apk add --repository http://dl-cdn.alpinelinux.org/alpine/edge/main --no-cache py3-psycopg2
RUN apk --no-cache add build-base
RUN apk --no-cache add postgresql-dev
RUN pip install -r requirements.txt && rm requirements.txt
