import React, { Component } from 'react';
import * as Survey from "survey-react"
import "survey-react/survey.css";
import './App.css';

class App extends Component {
  //Define Survey JSON
  //Here is the simplest Survey with one text question
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
 

  async upload(client, data) {
    try {
      await client.connect();
      console.log("Connected correctly to server");
      const db = client.db("data");
      // Use the collection "people"
      const col = db.collection("test");
      // Insert a single document, wait for promise so we can read it back
      const p = await col.insertOne(data);
      console.log(p);
    } 
    catch (err) {
      console.log(err.stack);
    }

    finally {
      await client.close();
    }
  }
  //Define a callback methods on survey complete
  onComplete(survey, options) {
    //Write survey results into database
    // const uri = "mongodb+srv://admin:admin123@cluster0.0xmnc.mongodb.net/data?retryWrites=true&w=majority";
    // const client = new MongoClient(uri);
    // this.upload(client, survey.data);
    const url = "http://localhost:3001/upload";
    const pram = {
      headers: {
        "content-type":"application/json; charset=UTF-8"
      },
      body: survey.data,
      method: "POST"
    };
    fetch(url, pram)
      .then(data=>(console.log(data)))
      .then(res=>(console.log(res)))
      .catch(error=>(console.log(error)));
    console.log("Survey results: " + JSON.stringify(survey.data));
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
   //Create the model and pass it into react Survey component
   //You may create survey model outside the render function and use it in your App or component
   //The most model properties are reactive, on their change the component will change UI when needed.
   var model = new Survey.Model({elements: this.createElements()});
   return (<Survey.Survey model={model} onComplete={this.onComplete}/>);
   /*
   //The alternative way. react Survey component will create survey model internally
   return (<Survey.Survey json={this.json} onComplete={this.onComplete}/>);
   */
   //You may pass model properties directly into component or set it into model
   // <Survey.Survey model={model} mode="display"/>
   //or 
   // model.mode="display"
   // <Survey.Survey model={model}/>
   // You may change model properties outside render function. 
   //If needed react Survey Component will change its behavior and change UI.
  }
 } 
export default App;
