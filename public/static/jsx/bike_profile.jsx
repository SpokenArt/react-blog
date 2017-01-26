var React = require('react/addons');


var ImagesComponent = React.createClass({

    render : function() {


        return (
            <div className="hero recipe-hero animated fadeIn">
              <h1>Title h11</h1>
              <img src="/images/voteByBike/bike1_edited.jpg"/>
            </div>
        )
    }
});

module.exports = ImagesComponent;
