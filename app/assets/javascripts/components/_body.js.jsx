var Body = React.createClass({
    getInitialState() {
        return { items: [] }
    },

    componentDidMount() {
        $.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) });
        console.log('Component mounted');
    },

    handleSubmit(item) {
        console.log(item);
    },

   render() {
       return (
           <div>
               <NewItem />
               <AllItems items={this.state.items} />
           </div>
       )
   }
});