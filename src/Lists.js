import React,{ Component } from 'react';
class Lists extends Component
{
    createTasks(item)
    {
    return <div>
        
        <li className= "ree" key={item.key}>{item.text}</li>
        <hr
      style={{
          color: "white",
          backgroundColor: "white",
          height: .1 ,
          width:1240
         
      }}/>
    </div>
    }
    render()
    {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);
        return (
            
      <ul className="clr theList ull ">
            {listItems }
            
            </ul>
           
           
        );
        
    }

}

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: .1
            
        }}
    />
  );
export default Lists;