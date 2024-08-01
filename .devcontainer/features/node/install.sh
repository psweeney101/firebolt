#!/bin/bash

sudo --user ${_CONTAINER_USER} bash <<EOF
    echo ${VERSION}
    # Install nvm
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

    # Install node
    . ~/.nvm/nvm.sh
    nvm install ${VERSION}
    nvm alias default ${VERSION}
EOF
