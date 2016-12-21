# Q1-Project

##introduction
I started with one idea ended up with a totally different product. I'm guessing this if okay because my project shows mastery in many skills. I ended up with an app that gathers top stories from news sites all over the world, displays an image, description, author, and link to the article. I also added a feature that matched the emotion conveyed in the article to a gif.

###The Problem
a simple news source to see top stories from sources around the world
###The Technology
alchemy nlp api
giphy api
news api

###The challenge
I had an idea for adding a gif to the headlines that matched the emotion and keywords of the articles. The challenge was finding how to display the gif that fit with my design.

enjoy...
https://q1-project-4883f.firebaseapp.com


###thinking out loud
1.go get url for headlines
2.put those urls in alchemy api to get keywords
3.use those keywords to search for gif
4.display those gifs with link to headline url

-use an object that stores the url and keywords in the global scope
1. use for loop to iterate through news api
2. send url to object
3. classify each obj with id of index number by sending i to obj

obj looks like
var obj {
  0:{
    URL: "http://www.espn.com/nfl/story/_/id/18263718",
  }
  1:{
    URL: "http://www.espn.com/nfl/story/_/id/18264840",
  }
  2:{
    URl: "http://www.espn.com/nfl/story/_/id/18265028",
  }
}

4. use url in obj to find keywords by passing it to alchemy function
  for(var index in obj){
    submitData(obj[index].URL)
  }
5. return keywords to obj inside submitData()

6. use keywords to search for gif
7. send gif url to obj

obj will look like:

var obj {
  0: {
    URL: "http://www.espn.com/nfl/story/_/id/18263718",
    keyword: "rams football"
    gif: "http://media0.giphy.com/media/BSAkQfSaszKIU/giphy.gif"
  }
  1: {
    URL: "http://www.espn.com/nfl/story/_/id/18264840",
    keyword: "jeff fisher rams"
    gif: "http://media4.giphy.com/media/BSAkQfSaszKIU/giphy.gif"
  }
  2: {
    URL: "http://www.espn.com/nfl/story/_/id/18265028",
    keyword: "cowboys football"
    gif: "http://media1.giphy.com/media/3EAKxfYn57AM79a920/giphy.gif"
  }
}

-now you have an object that you can use to display the gifs with links to website
-use a for loop to iterate through and create html elements
