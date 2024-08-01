FROM mcr.microsoft.com/devcontainers/base:jammy

# Update repos
RUN apt update && \
    apt upgrade --yes

# Become non-root user
USER vscode
