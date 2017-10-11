import React, { Component } from 'react';
import SimpleForm from './SimpleForm';
import { Header } from 'semantic-ui-react';


class Home extends Component {

    constructor(props) {
        super(props);

        this.yahooWiget = this.yahooWidget.bind(this);
    }

    yahooWidget() {
        const query = this.props.weather.query;
        if (query && query.results) {
            let html = query.results.channel.item.description;
            html = html.replace(/(<!\[CDATA\[|]]>)/g, '');
            console.log(html);
            return (
                <div>
                    <br/>
                    <Header as='h3' textAlign='center'>
                        {query.results.channel.description}
                    </Header>
                    <div dangerouslySetInnerHTML={{__html: html}}></div>
                </div>
            );
        }
    }

  render() {
      return (
         <div>
             <SimpleForm />
             {this.yahooWidget()}
          </div>
    );
  }
}

export default Home;
