import React from 'react';
import { browserHistory } from 'react-router';

import { Players } from  '../api/players';
var x = 44;

export default class New extends React.Component {

  submitPlayer(event) {
    event.preventDefault();

    Players.insert({
      name: this.refs.name.value,  // refs and valuu!
      team: this.refs.team.value,
      ballManipulation: this.refs.ballManipulation.value,
      kickingAbilities: this.refs.kickingAbilities.value,
      passingAbilities: this.refs.passingAbilities.value,
      duelTackling:  this.refs.duelTackling.value,
      fieldCoverage: this.refs.fieldCoverage.value,
      blockingAbilities: this.refs.blockingAbilities.value,
      gameStrategy: this.refs.gameStrategy.value,
      playmakingRisks: this.refs.playmakingRisks.value,
      notes: this.refs.notes.value,
      createdAt: new Date(),
    });

    console.log("Success player submitted!");

    browserHistory.push('/');
  }

  /* Bind necessary since ES6 - check WHY */
  render() {
    return (
        <div className="row">


          <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>

            <h3>Add a new player</h3>

            <div className="row">
                <div className="input-field col s6">
                  <input placeholder="Name" ref="name" type="text" className="validate"/>
                </div>
                <div className="input-field col s6">
                  <input placeholder="Team" ref="team" type="text" className="validate"/>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s6">
                  <h5>Ball manipulation</h5>
                  <select className="browser-default" ref="ballManipulation">
                    <option value="0">0 - Hasn't demonstrated skills</option>
                    <option value="1">1 - Needs improvement</option>
                    <option value="2">2 - Skill aquired</option>
                    <option value="3">3 - Great skills/could teach</option>
                  </select>
                </div>
                <div className="input-field col s6">
                  <h5>Kicking abilities</h5>
                  <select className="browser-default" ref="kickingAbilities">
                    <option value="0">0 - Hasn't demonstrated skills</option>
                    <option value="1">1 - Needs improvement</option>
                    <option value="2">2 - Skill aquired</option>
                    <option value="3">3 - Great skills/could teach</option>
                  </select>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s6">
                  <h5>Passing abilities</h5>
                  <select className="browser-default" ref="passingAbilities">
                    <option value="0">0 - Hasn't demonstrated skills</option>
                    <option value="1">1 - Needs improvement</option>
                    <option value="2">2 - Skill aquired</option>
                    <option value="3">3 - Great skills/could teach</option>
                  </select>
                </div>
                <div className="input-field col s6">
                  <h5>Duel - Tackling</h5>
                  <select className="browser-default" ref="duelTackling">
                    <option value="0">0 - Hasn't demonstrated skills</option>
                    <option value="1">1 - Needs improvement</option>
                    <option value="2">2 - Skill aquired</option>
                    <option value="3">3 - Great skills/could teach</option>
                  </select>
                </div>
            </div>


            <div className="row">
                <div className="input-field col s6">
                  <h5>Field Coverage - speed</h5>
                  <select className="browser-default" ref="fieldCoverage">
                    <option value="0">0 - Hasn't demonstrated skills</option>
                    <option value="1">1 - Needs improvement</option>
                    <option value="2">2 - Skill aquired</option>
                    <option value="3">3 - Great skills/could teach</option>
                  </select>
                </div>
                <div className="input-field col s6">
                  <h5>Blocking abilities</h5>
                  <select className="browser-default" ref="blockingAbilities">
                    <option value="0">0 - Hasn't demonstrated skills</option>
                    <option value="1">1 - Needs improvement</option>
                    <option value="2">2 - Skill aquired</option>
                    <option value="3">3 - Great skills/could teach</option>
                  </select>
                </div>
            </div>


            <div className="row">
                <div className="input-field col s6">
                  <h5>Game Strategy</h5>
                  <select className="browser-default" ref="gameStrategy">
                    <option value="0">0 - Hasn't demonstrated skills</option>
                    <option value="1">1 - Needs improvement</option>
                    <option value="2">2 - Skill aquired</option>
                    <option value="3">3 - Great skills/could teach</option>
                  </select>
                </div>
                <div className="input-field col s6">
                  <h5>Playmaking Risks</h5>
                  <select className="browser-default" ref="playmakingRisks">
                    <option value="0">0 - Hasn't demonstrated skills</option>
                    <option value="1">1 - Needs improvement</option>
                    <option value="2">2 - Skill aquired</option>
                    <option value="3">3 - Great skills/could teach</option>
                  </select>
                </div>
            </div>


            <div className="row">
                <div className="input-field col s6">
                  <textarea placeholder="Notes" ref="notes" className="materialize-textarea" />
                </div>
                <div className="input-field col s6">
                  <button className="btn waves-effect waves-light" type="submit" name="action">
                    Submit<i className="material-icons right">send</i>
                  </button>
                </div>
            </div>

          </form>
        </div>
    );
  }
}
