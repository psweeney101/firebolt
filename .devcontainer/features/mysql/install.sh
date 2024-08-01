#!/bin/bash

# Install mysql
apt install default-mysql-client --yes

# Alias mysql command with defaults
sudo --user ${_CONTAINER_USER} bash -c 'echo "alias mysql=\"mysql --host=mysql --user=\${MYSQL_USER} --password=\${MYSQL_PASSWORD} --database=\${MYSQL_DATABASE}\"" >> ~/.bashrc'
