import React, { Component } from "react";

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items : []
        }
       this.Addnote = this.Addnote.bind(this);
    }
    Addnote(event){
        console.log("working")

        if( this.theTitle.value != "" ) {
            var newItem = {
                title: this.theTitle.value,
                notes:this.theNotes.value
            };
          }
            this.setState((prevState) => {
                return{
                    items: prevState.items.concat(newItem)
                
            }
        })
        this.theNotes.value = "";
        this.theTitle.value="";
        event.preventDefault();
            
    }
  render() {
    return (
      <div>
        <header>
          <h1>Note Taking App</h1>
        </header>
      
      <main className="main-content">
    
          <ol>
          {this.state.items.map( (val) => <li>{val.title}: {val.notes} </li>)}
          </ol>
          


      </main>
      <footer>
          <form onSubmit ={this.Addnote}>
              <input type="text" placeholder ="Enter your note title here" ref = {(title) => this.theTitle = title} />
                  <textarea placeholder="Ener your notes here" ref={(notes) => this.theNotes = notes}/>
                  <button type="submit" value="Add Notes">Add Notes</button>
          </form>
      </footer> 
      </div>
    );
  }
}

export default Home;
