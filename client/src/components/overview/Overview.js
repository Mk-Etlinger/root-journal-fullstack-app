import React, { Component } from 'react';
import TableView from './TableView';
import VisualView from './VisualView';
import Stats from './Stats'
import { connect } from 'react-redux';
import { getMeals } from '../../actions/meals/meals';
import { getSymptoms } from '../../actions/symptoms/symptoms';
import { getMostSymptomaticFoods } from '../../actions/getMostSymptomaticFoods';

class Overview extends Component {
    constructor() {
        super()

        this.state = {
            compActive: 'overview',
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (e) => {
        this.setState({ compActive: e.target.id }) 
    }

    componentDidMount() {
		this.props.getMeals();
		this.props.getSymptoms();
        this.props.getMostSymptomaticFoods();
    };
    
    render(){
        const { meals } = this.props.meals, 
            { symptoms } = this.props.symptoms,
            { mostSymptomaticFoods } = this.props.overviewQueries,
            { compActive } = this.state
        const isMealLoaded = meals.length > 0,
            isSymptomLoaded = symptoms.length > 0,
            isMostSymptomaticFoodsLoaded = Object.keys(mostSymptomaticFoods).length > 0

        return (
            <div>
                <div style={OverviewDivStyle}>
                    <h2 id="overview" onClick={this.handleClick}>Overview</h2>
                </div>
                <div style={OverviewDivStyle}>
                    <h2 id="tableView" onClick={this.handleClick}>Table View</h2>
                </div>
                <div style={OverviewDivStyle}>
                    <h2 id="dataVisView" onClick={this.handleClick}>Visual View</h2>
                </div>
                { compActive === 'overview' &&
                    <div style={{ marginTop: 40 }}>
                        { isMostSymptomaticFoodsLoaded && 
                            <Stats mostSymptomaticFoods={mostSymptomaticFoods}/> }
                    </div> 
                }
                { compActive === 'tableView' &&
                    <div style={{ marginTop: 40 }}>
                        { isMealLoaded && <TableView meals={meals} symptoms={symptoms}/> }
                    </div> 
                }
                { compActive === 'dataVisView' &&
                    <div style={{ marginTop: 40 }}>
                        { isSymptomLoaded && <VisualView symptomsIndex={symptoms}/> }
                    </div>
                }
            </div>
        )
    };
}

Overview.defaultProps = {
    mostSymptomaticFoods: {},
}

let OverviewDivStyle = {
    display: 'inline-block', 
    cursor: 'pointer', 
    width: '200px',
    border: 'solid black', 
    margin: '10px auto 0 auto'
}

const mapStateToProps = (state) => {
    return ({
        meals: state.meals,
        symptoms: state.symptoms,
        overviewQueries: state.overviewQueries
    })
}

export default connect(mapStateToProps, { 
    getMeals, 
    getSymptoms,
    getMostSymptomaticFoods
})(Overview)