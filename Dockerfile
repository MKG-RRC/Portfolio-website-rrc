# ===== BUILD STAGE =====
FROM node:18-alpine AS build

# Required working directory name
WORKDIR /Garcia_Mark_final_site

# Copy only package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .
ENV DISABLE_ESLINT_PLUGIN=true

# Build the production version of CRA
RUN npm run build


# ===== RUN STAGE =====
FROM nginx:stable-alpine

# Same working directory name still applies
WORKDIR /Garcia_Mark_final_site

# Copy build output from previous stage into nginx's HTML folder
COPY --from=build /Garcia_Mark_final_site/build /usr/share/nginx/html

# Expose port 80 inside container
EXPOSE 80

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]


# docker build -t garcia_mark_coding_assignment14 .
# docker run --name garcia_mark_coding_assignment14 -p 5575:80 garcia_mark_coding_assignment14
