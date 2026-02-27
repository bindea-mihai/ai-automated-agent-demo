FROM mcr.microsoft.com/dotnet/sdk:10.0

# Install Node.js 20, git, curl, jq
RUN apt-get update && apt-get install -y curl git jq && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

# Install Claude Code CLI
RUN npm install -g @anthropic-ai/claude-code

# Install EF Core tools (needed for dotnet ef migrations)
RUN dotnet tool install --global dotnet-ef
ENV PATH="$PATH:/root/.dotnet/tools"

# Copy entrypoint
COPY run-agent.sh /run-agent.sh
RUN chmod +x /run-agent.sh

ENTRYPOINT ["/run-agent.sh"]
