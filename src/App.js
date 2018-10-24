import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import GoogleButton from 'react-google-button';
import Portfolios from './Components/Portfolios';
import Header from './Header';
import HomePageComponent from './Components/HomePage';
const API = 'http://localhost.com/users';

class App extends Component {

  constructor() {
    super();
    this.render = this.render.bind(this);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    // fetch('/api/users')
    //   .then(response => response.json())
    //   .then(users => {
    //     this.setState({ users }, () => console.log(users))
    //   });

    // Mock API call ~1 second
      new Promise(resolve => {
        setTimeout(() => {
          const users = [{
              "user_id": 1,
              "firstName": "Sonika",
              "lastName": "Patel",
              "email": "sonikapatel8@gmail.com",
              "password": "yes",
              "title": "Student",
              "company": "USC"
            },
            {
              "user_id": 2,
              "firstName": "Jamie",
              "lastName": "Haberman",
              "email": "jhaberm@usc.edu",
              "password": "no",
              "title": "Student",
              "company": "USC"
            },
            {
              "user_id": 3,
              "firstName": "Naylee",
              "lastName": "Nagda",
              "email": "nnagda@usc.edu",
              "password": "woot",
              "title": "Student",
              "company": ""
            },
            {
              "user_id": 9,
              "firstName": "Andrea",
              "lastName": "Chen",
              "email": "soccerpiano88@gmail.com",
              "password": "yes",
              "title": "Student",
              "company": "USC"
            }];

          let items = users.map((u, i) => <li key={i}>{u.firstName}</li>);
          this.setState({ items });
          resolve();
        }, 500);
      });
  }

  componentDidMount() {
    window.$ = window.jQuery = require('jquery');
    var $ = window.$;

    var TabBlock = {
      s: {
        animLen: 200
      },

      init: function () {
        TabBlock.bindUIActions();
        TabBlock.hideInactive();
      },

      bindUIActions: function () {
        $('.tabBlock-tabs').on('click', '.tabBlock-tab', function () {
          TabBlock.switchTab($(this));
        });
      },

      hideInactive: function () {
        var $tabBlocks = $('.tabBlock');

        $tabBlocks.each(function (i) {
          var
            $tabBlock = $($tabBlocks[i]),
            $panes = $tabBlock.find('.tabBlock-pane'),
            $activeTab = $tabBlock.find('.tabBlock-tab.is-active');

          $panes.hide();
          $($panes[$activeTab.index()]).show();
        });
      },

      switchTab: function ($tab) {
        var $context = $tab.closest('.tabBlock');

        if (!$tab.hasClass('is-active')) {
          $tab.siblings().removeClass('is-active');
          $tab.addClass('is-active');

          TabBlock.showPane($tab.index(), $context);
        }
      },

      showPane: function (i, $context) {
        var $panes = $context.find('.tabBlock-pane');

        // Normally I'd frown at using jQuery over CSS animations, but we can't transition between unspecified variable heights, right? If you know a better way, I'd love a read it in the comments or on Twitter @johndjameson
        $panes.slideUp(TabBlock.s.animLen);
        $($panes[i]).slideDown(TabBlock.s.animLen);
      }
    };

    $(() => TabBlock.init());
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
              { this.state.items }
          </ul>
          <meta charSet="utf-8" />
          <Header/>
          <Route path="/" component={HomePageComponent} exact/>
          <Route path="/portfolios" component={Portfolios} />
        </div>
      </Router>
    );
  }
}

 export default App;
