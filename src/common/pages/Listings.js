/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-fela';
import { Link } from 'react-router-dom';
import timeago from 'timeago.js';
import Card from '../card';
import Loader from '../layout/Loader';
import FetchClient from '@synapsestudios/fetch-client';

const fetch = new FetchClient({ url: '/data' });

class Listings extends Component {
  state = {
    listings: null,
  };

  componentDidMount() {
    fetch.get(`${this.props.city}.json`).then(response => {
      response
        .json()
        .then(listings => {
          this.setState(() => ({
            listings,
          }));
        })
        .catch(err => {
          console.error(err);
        });
    });
  }

  render() {
    const { styles } = this.props;
    const { listings } = this.state;

    if (!listings) {
      return <Loader />;
    }

    const lastUpdated = timeago().format(listings.date);

    return (
      <div className={styles.root}>
        <div className={styles.heading}>
          Results update every hour – last updated {lastUpdated}
        </div>
        <div className={styles.listings}>
          {listings.data.map((dirt, i) => (
            <Link
              className={styles.link}
              key={i}
              to={dirt.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card
                image={dirt.image || ''}
                title={dirt.title}
                location={dirt.location}
                date={dirt.date}
              />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default connect({
  root: props => ({
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    padding: '8px',
  }),
  heading: props => ({
    textAlign: 'center',
    fontSize: '14px',
  }),
  listings: props => ({
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
  }),
  link: props => ({
    margin: '8px',
  }),
})(Listings);
