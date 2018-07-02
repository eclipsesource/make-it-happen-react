import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import blue from '@material-ui/core/colors/blue'
import Radium from 'radium';
import './App.css';
import Day1 from './day1';
import Day2 from './day2';
import Day3 from './day3';
import Day4 from './day4';
import Day5 from './day5';
import Day5WithCategories from './day5-categories';
import Day6 from './day6';

const RadiumLink = Radium(Link);

const styles = theme => ({
  link: {
    color: blue[500],
    textDecoration: 'none',
    marginLeft: '1em'
  },
  root: {
    flex: 1,
  },
  paper: {
    flex: 1,
    width: '80%',
    justifyContent: 'center',
    margin: 'auto',
    padding: '1em'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  title: {
    flex: 1,
  },
});

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // TODO
      currentExample: 'day1'
    }
  }

  handleChange = event => {
    this.setState({ currentExample: event.target.value });
  };

  render() {

    const { classes }= this.props;
    const days = [1,2,3,4,5].map(i => ({
      value: `day${i}`,
      label: `Day ${i}`
    })).concat({
      value: 'day5-categories',
      label: 'Day 5 (Categories)'
    }).concat({
      value: 'day6',
      label: 'Day 6'
    });

    return (
      <div className={classes.root}>
        <Router>
          <div>
            <AppBar position={'static'}>
              <Toolbar>
                <Typography
                  type={'title'}
                  color={'inherit'}
                  className={classes.title}
                >
                  Make it happen with JSONForms & React
                </Typography>
                {
                  days.map(day =>
                      <Button
                        component={RadiumLink}
                        color='contrast'
                        to={`/${day.value}`}
                        key={`btn-${day.value}`}
                      >
                        {day.label}
                      </Button>
                  )
                }
              </Toolbar>
            </AppBar>
            <Paper className={classes.paper}>
              <Switch>
                <Route path='/day1' component={Day1} />
                <Route path='/day2' component={Day2} />
                <Route path='/day3' component={Day3} />
                <Route path='/day4' component={Day4} />
                <Route path='/day5' component={Day5} />
                <Route path='/day5-categories' component={Day5WithCategories} />
                <Route path='/day6' component={Day6} />
                <Route path='/' component={Day1} />
              </Switch>
            </Paper>
          </div>
        </Router>
      </div>
    );
  }
}

export default withStyles(styles)(App);
