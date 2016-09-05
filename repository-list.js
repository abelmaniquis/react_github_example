var React = require('react');
var connect = require('react-redux').connect;
var Repository = require('./repository');
var actions = require('./actions');

console.log('HERE IS REPOSITORY')
console.log(Repository);


var RepositoryList = React.createClass({
    addRepository: function() {
        var repositoryName = this.refs.repositoryName.value;
        this.props.dispatch(actions.addRepository(repositoryName));
    },
    render: function() {        //This is what is giving the error
        var repositories = this.props.repositories.map(function(repository) {
            return <Repository repository={repository} key={repository.name} />;
        });

        return (
            <div className="repository-list">
                {repositories}
                <input type="text" ref="repositoryName" />
                <button type="button" onClick={this.addRepository}>
                    Add repository
                </button>
            </div>
        );
    }
});

console.log("Here's what RepositoryList.refs looks like:");
console.log(RepositoryList.refs);

module.exports = RepositoryList;