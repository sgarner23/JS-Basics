/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

let gitDefinition = "Git is a software program that helps you track any changes that were made to your code. One benefit is you can commit projects multiple times and instead of it being overwritten, you can view what your project looked like in time each time you comitted it so you can go back and reference what it was like at a specific time in the project."

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition = "Github is a web based host to push all of your projects to and leverages Git. It allows you to connect your projects through git to a hub on the interenet for tracking, version control, and collobration with peers so multiple people can see your code, download it, and work on it with you"

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE
const init = {
    desctiption : " 'Git Init' is a command that you can enter into the terminal that will create a new Git repository. This is usually a good first step",
    code: "git init"
}

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
const clone = {
    desctiption: "This will create a copy of an exisiting git repository",
    code: "git clone 'https of repository'"
}


//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE
const status = {
    desctiption = "gives you the 'status' or state of a working directory",
    code = "git status"
}

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE
const add = {
    desctiption: "adds the content of a file to your git repository",
    code: "git add 'name of file'", 
    code2: "git add .(adds the file)"
}

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
const commit = {
    desctiption: "takes a snapshot of what the project looks like at that specific time so you can reference it later on",
    code: "git commit -m 'comment'";
}

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE
const push = {
    desctiption: "This is what we use to upload a repository to a remote location. For example, I can push this file from my local computer to my github repository (remote location)",
    code: "Git push"
}