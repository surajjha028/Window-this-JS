## Window and this keyword :

window is like a big object, with lot of functions and methods. And this function and methods are created by JS Engine into Global space .
And Just like window , Javascript Engine also created this keyword.(And at the Global level this keyword refer to window)

NOTE :- Javascript Engine - where our code runs behind the scenes in execution context.

NOTE:- Window is actually a global object which is created along with Global Execution Context.
So, whenever any Javascript program is run a Global object and a Global execution context is created, 
along with that this keyword variable is also created.

In browser Global object are reference as window. And even if the javascript code is empty javascript engine will created Global object i.e Window
In Global execution context and in Global space(this === window). 

Global space - It is nothing, any code you right inside javascript but not inside any function is called Global space.
In simple way, Any thing which is not inside any function is the Global Space. 

