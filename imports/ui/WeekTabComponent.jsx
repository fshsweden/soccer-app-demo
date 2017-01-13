
import React from 'react';
import SwipeableViews from 'react-swipeable-views';

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    slide: {
        padding: 10,
    },
};

export default class WeekTabComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0
        };

        // tap-dance needed to avoid "Missing class properties transform"
        this._handleChange = this._handleChange.bind(this);
    }

    _handleChange(name, value) {
        this.setState({...this.state, [name]: value})
    }


    render() {
        return (
            <div>

                <Tabs>
                    <Tab label="Tab One"  />
                    <Tab label="Tab Two"  />
                    <Tab label="Tab Three"  />
                </Tabs>

                <SwipeableViews>
                    <div>
                        <h2 style={styles.headline}>Tabs with slide effect</h2>
                        Swipe to see the next slide.<br />
                    </div>
                    <div style={styles.slide}>
                        slide n°2
                    </div>
                    <div style={styles.slide}>
                        slide n°3
                    </div>
                </SwipeableViews>
            </div>
        );
    }
}
