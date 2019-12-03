import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
import History from '../History/History';
import Contact from '../Contact/Contact';

export default class About extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>
          <Link className='subnav_links'to={'/about'}>
            <h3>About</h3></Link>
          <Link className='subnav_links'to={'/about/history'}>
            <h3>History</h3></Link>
          <Link className='subnav_links'to={'/about/contact'}>
            <h3>Contact</h3></Link>
        </div>
        <div className='box'>
          <Switch>
            <Route path='/about/history' component={History}/>
            <Route path='/about/contact'component={Contact}/>
            <Route exact path='/about' 
            render={() => (
              <div>
                <h1>About the University</h1>
                <p>
                Pooping rainbow while flying in a toasted bread costume in space chase ball of string chew foot, and poop on grasses. Why must they do that flop over. Favor packaging over toy sleep nap and knock over christmas tree spread kitty litter all over house sweet beast. Use lap as chair give attitude poop on grasses sleep nap. Vommit food and eat it again purr while eating yet meowing non stop for food shove bum in owner's face like camera lens. Intently stare at the same spot stand in front of the computer screen purr for no reason stare at the wall, play with food and get confused by dust so present belly, scratch hand when stroked. Intrigued by the shower have secret plans. Sweet beast find something else more interesting, or stare at ceiling. Leave dead animals as gifts find something else more interesting. Lick butt. Sleep in the bathroom sink why must they do that. Intently sniff hand lick butt, and chase mice play time, but sweet beast, so cat snacks.
                </p>
              </div>
            )} />
          </Switch>
        </div>
      </div>
    )
  }
}