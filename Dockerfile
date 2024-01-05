FROM node:20

# Install required dependencies, including libnss3
RUN apt-get update \
    && apt-get install -y libnss3 \
    && rm -rf /var/lib/apt/lists/*
# Download and install Chrome

RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list' \
    && apt-get update \
    && apt-get install -y google-chrome-stable \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /tests

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "wdio"]
