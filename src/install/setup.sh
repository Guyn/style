#!/usr/bin/env bash
URL="https://raw.githubusercontent.com/guyn/project/master/src/scss"
TARGET="$1/"

if [ -z "$1" ]
  then
    printf "\nNo folder supplied\n\n"
		exit 1
fi
# tools
mkdir -p ${TARGET}tools 

curl -o ${TARGET}tools.scss -l ${URL}/tools.scss --fail --silent --show-error
curl -o ${TARGET}tools/_pre.scss -l ${URL}/tools/_pre.scss --fail --silent --show-error
curl -o ${TARGET}tools/_post.scss -l ${URL}/tools/_post.scss --fail --silent --show-error

printf '\n  Tools \e[1;34mcreated!\e[0m' 

# typography
mkdir -p ${TARGET}typography 

curl -o ${TARGET}typography/_index.scss -l ${URL}/typography/_index.scss --fail --silent --show-error
curl -o ${TARGET}typography/_embed.scss -l ${URL}/typography/_embed.scss --fail --silent --show-error
curl -o ${TARGET}typography/_spacing.scss -l ${URL}/typography/_spacing.scss --fail --silent --show-error
curl -o ${TARGET}typography/_usage.scss -l ${URL}/typography/_usage.scss --fail --silent --show-error

printf '\n  Typography \e[1;34mcreated!\e[0m' 

#components
mkdir -p ${TARGET}components 

curl -o ${TARGET}components/_index.scss -l ${URL}/components/_index.scss --fail --silent --show-error
curl -o ${TARGET}components/_content.scss -l ${URL}/components/_content.scss --fail --silent --show-error

printf '\n  Components \e[1;34mcreated!\e[0m'

#colors
mkdir -p ${TARGET}color 

curl -o ${TARGET}color/_index.scss -l ${URL}/color/_index.scss --fail --silent --show-error

if [ "$2" == "guyn" ]
  then
	curl -o ${TARGET}color/_custom-colors.scss -l ${URL}/color/_custom-colors-guyn.scss --fail --silent --show-error
else
	curl -o ${TARGET}color/_custom-colors.scss -l ${URL}/color/_custom-colors.scss --fail --silent --show-error
fi

printf '\n  Colors \e[1;34mcreated!\e[0m'

# app.scss
curl -o ${TARGET}app.scss -l ${URL}/app.scss --fail --silent --show-error

printf '\n  App.scss \e[1;34mcreated!\e[0m' 


printf '\n\n'
