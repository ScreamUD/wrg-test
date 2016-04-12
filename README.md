# Install node modules
npm install

# Install scss_lint via bundler
bundle install
# See http://bundler.io for how to install bundler
# Alternatively, install the scss_lint globally per https://github.com/brigade/scss-lint#installation

# Copy all files that you need
grunt copyfiles

# Initial Sass compile
grunt buildcss

# Initial JS compile
grunt buildjs

### On File Change

`grunt watch`