import React, { Component } from 'react';
import * as Survey from "survey-react"
import "survey-react/survey.css";
import './App.css';

class Thanks extends Component {
  render() {
    return(<h2 style={{color: "green"}}>Thanks for your submission!</h2>)
  }
}

class Error extends Component {
  render() {
    return(<h2 style={{color: "red"}}>An error occurred. Please try again. If this error persists, please contact Ash.</h2>)
  }
}

class Content extends Component {
  
  data = [["hipster", "trendy"], ["emo", "sad"], ["yeet", "throw"], ["lol", "laugh"], ["yolo", "impulsive"], ["simp", "desperate"], ["noob", "new"], ["geek", "nerd"], ["steezy", "stylish"], ["bye felicia", "dismiss"], ["netflix and chill", "hookup"], ["smh", "disappointment"], ["dork", "misfit"], ["tool", "egotistical"], ["fml", "discontent"], ["dank", "excellent"], ["boo", "lover"], ["douche", "jerk"], ["hmu", "invite"], ["meh", "uninteresting"], ["troll", "provoke"], ["karen", "entitled"], ["fleek", "stylish"], ["oof", "discomfort"], ["xd", "laugh"], ["bromance", "friendship"], ["lmao", "laugh"], ["friends with benefits", "partner"], ["trill", "respected"], ["antistalking", "avoid"], ["og", "original"], ["stoner", "marijuana"], ["derp", "foolish"], ["vsco girl", "artsy"], ["cool story bro", "indifference"], ["clout", "influence"], ["trolling", "provoking"], ["crunk", "drunk"], ["lit", "awesome"], ["food baby", "full"], ["ricer", "car"], ["fam", "friend"], ["dog", "friend"], ["based", "authentic"], ["neckbeard", "misogynist"], ["weenis", "elbow"], ["goat", "greatest"], ["man cave", "room"], ["soccer mom", "entitled"], ["homie", "friend"], ["shawty", "woman"], ["bro", "man"], ["dude", "person"], ["ghetto", "impoverished"], ["whipped", "controlled"], ["poser", "fake"], ["word", "yes"], ["nsfw", "inappropriate"], ["sike", "not"], ["dab", "dance"], ["tbh", "honestly"], ["worldstar", "crazy"], ["rest in power", "condolence"], ["g", "gangster"], ["savage", "brutal"], ["thx", "thanks"], ["chick flick", "movie"], ["struggle is real", "hard"], ["swerve", "avoid"], ["fomo", "lonely"], ["ratchet", "undignified"], ["selfie", "photo"], ["sup", "hello"], ["trap", "deal"], ["ftw", "win"], ["bop", "dance"], ["legit", "authentic"], ["finna", "going"], ["hater", "critic"], ["stan", "supporter"], ["catfish", "mislead"], ["thick", "built"], ["op", "poster"], ["no cap", "TRUE"], ["swagger", "confidence"], ["rofl", "laugh"], ["rekt", "wrecked"], ["zing", "euphoria"], ["pop a squat", "sit"], ["poggers", "epic"], ["love tap", "nudge"], ["stonks", "stocks"], ["gg", "defeat"], ["slay", "succeed"], ["yuge", "huge"], ["aight", "alright"], ["thirsty", "desperate"], ["sauce", "source"], ["soz", "sorry"], ["memes", "jokes"]];
  vals = [
    {
      value: 0
    },
    {
      value: 1
    },
    {
      value: 2
    },
    {
      value: 3
    },
    {
      value: 4
    },
    {
      value: 5
    },
    {
      value: 6
    },
    {
      value: 7
    },
    {
      value: 8
    },
    {
      value: 9
    },
    {
      value: 10
    }
  ];

  //Define a callback methods on survey complete
  onSubmit = (survey, options) => {
    var completeFunc = this.props.onComplete;
    try
    {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", 'http://127.0.0.1:5000/data', true);
      xhr.onload = function() {
        console.log(this.status);
        if (this.status === 200)
        {
          completeFunc(false);
        }else{
          completeFunc(true);
        }
        
      };

      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(JSON.stringify(survey.data));
    }catch{
      completeFunc(true);
    }
    // console.log("Survey results: " + JSON.stringify(survey.data));
  }

  createElements() {
    var elements = [];
    for (const pair of this.data) {
      const entry = {
        type: "rating",
        name: pair[0]+"|"+pair[1],
        title: `${pair[0]} --- ${pair[1]}`,
        minRateDescription: "Not similar",
        maxRateDescription: "The same",
        isRequired: true,
        rateValues: this.vals,
        defaultValue: 5
      };
      elements.push(entry);
    }
    return elements;
  }

  render() {
    var model = new Survey.Model({elements: this.createElements()});

    return(
      this.props.complete 
      ? 
        this.props.error 
        ?
          <Error /> : <Thanks />
      :
        <Survey.Survey   
          model={model} 
          onComplete={this.onSubmit}
          showCompletedPage={false}
        />
    )
  }
}

class App extends Component {
  //Define Survey JSON
  //Here is the simplest Survey with one text question
  constructor(props) {
    super(props);
    this.state = {
      completed: false,
      error: false
    };
  }

  onComplete = (error) => {
    this.setState({completed: true});
    if (error)
      this.setState({error: true});
  }
  

  render() {
   return (
      <Content onComplete={this.onComplete} complete={this.state.completed} error={this.state.error}/>
    );
  }
 } 
export default App;
