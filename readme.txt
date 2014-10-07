When you push a yeoman project to git, it only pushes your scripts and configuration files. It does not push libraries and dependencies.

So when you git clone a yeoman project you won’t be having all the files to run the project.
If you run grunt command. You will get following output:

grunt-cli: The grunt command line interface. (v0.1.13)

Fatal error: Unable to find local grunt.

If you're seeing this message, either a Gruntfile wasn't found or grunt
hasn't been installed locally to your project. For more information about
installing and configuring grunt, please see the Getting Started guide:

http://gruntjs.com/getting-started

Just run

npm install
bower update

Now if you run grunt serve. Hopefully it will run properly.
If you get this error:

Warning: watch ENOSPC
warning: Recursive process.nextTick detected. This will break in the next version of node. Please use setImmediate for recursive deferral.

Use following command to fix it.

echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

(Ref: http://stackoverflow.com/questions/16748737/grunt-watch-error-waiting-fatal-error-watch-enospc)
