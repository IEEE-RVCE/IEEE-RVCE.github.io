# IEEE-RVCE.github.io

Development site of only frontend

## Setup

1) Clone the github repository

        git clone https://github.com/IEEE-RVCE/IEEE-RVCE.github.io ieee-rvce.github.io

2) Install all the dependencies in the folder by running the below command in the folder

        npm install package.json

3) Start localhost server by running the below after install

        npm start

4) A window should open shortly with the web app running

## The workflow

Ideally test the component or page on a separate branch and keep it developing. When it is done and works with the code in master branch correctly, merge the branch. Take care that the test files are only created in the test branch, or there can be a merge conflict. Try not to change the files which were on the master. If you do need to change them, change them with the update on the master branch for everybody to use the change, so they are in track.

## Keeping up with the changes

1) Pull the repository

        git pull origin master

    This should pull the contents of the master branch

2) Install all the dependencies that might have been updated by running

        npm install package.json

3) Make your own branch on your device and switch to it

        git checkout -b <branch name>

4) Work on the current branch of your own. Name it appropriately

5) When it works and is stable, merge with the master adding a message that closes an issue pertaining to your task, if any

6) Push the changes by running

        git push origin master

## Note

The above workflow is set on a whim, but if anybody has a better idea, please do pitch it! Let's gooooooo xD
