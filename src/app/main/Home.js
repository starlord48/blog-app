import React, { Component } from 'react';
import  './css/Front-style.css';
import ShowPost from './Postit';

class Home extends Component {
  render() {
    return (
      <div>
      
      <div className="landing">
          <h2 classname="post1">The craze about React</h2>
            <div className="body1">If you’re a front-end developer who mostly knows HTML and CSS, or a backend developer who wants to move into front-end work, ReactJS is one of the best new technologies you could learn. Not to mention, there are many lucrative employment opportunities for React developers, as it’s currently the fastest growing front-end technology in Australia.
It’s a better model for development — the best one so far — and rapidly exploding in popularity. ReactJS has also set a new standard for web applications. This makes it an ideal framework for current developers to learn to upskill fast. However, it’s actually not a framework, it’s a library.</div>
            <h2 classname="post2">Creating viral apps with react native</h2>
              <div className="body2">
              This week in our Sydney bootcamp, we were fortunate enough to host the founders of Vylar Ptd Ltd, Jacky Koh and Daniel Vassilev. Jacky and Daniel met in school, began working together, and have been business partners for the last several years. Did we mention they’ve recently begun uni? Yeah… Anyway, they’re responsible for building a viral app you might have heard of: PokewhereGO, a live radar for PokemonGO. The craziest part? They built it in about four hours with React Native and Firebase before throwing it into the app store at the peak of the PokemonGO craze. Over night, they gained 200k users.
                Over five days, they worked with a Senior React developer to build it into a fully featured app that could handle 40,000 active concurrent users. At one stage, they needed 40 Digital Ocean instances just to handle testing.</div>
              <h2 classname="post3">Should Kids learn how to code</h2>
                <div className="body3">
                There is a debate going around in the tech sphere about whether kids should learn to code. One faction believes that kids couldn’t possibly comprehend the complexity of coding at such an early age, and hence trying to learn would be a waste of time. The other side believes that coding is a fundamental skill that kids especially need to learn to excel in the 21st century. At Coder Academy, we are firm believers of the latter. We believe that learning to code for children has become almost as important, if not more important, as learning any other skill. There are numerous benefits your kids can get from learning to code at an early age.</div>

        </div>
      </div>
    );
  }
}


export default Home;
