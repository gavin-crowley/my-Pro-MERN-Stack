// Render JSX to the DOM
ReactDOM.render(componentToRender, targetNode);

// Render a component to the DOM
ReactDOM.render(<componentToRender />, targetNode);

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>My First React Component !</h1>
      </div>
    );
  }
}

ReactDOM.render(<MyComponent />, document.getElementById("challenge-node"));

// =======================================

// Pass Props to a Stateless Functional Component -function components are a simpler way to write components that only contain a render method and don’t have their own state.
// Passing properties to child components

// how to pass information from a parent component
// to a child component as props or properties.

// It is standard to call this value props and when dealing with stateless functional components,
// you basically consider it as an argument to a function which returns JSX.

const CurrentDate = props => {
  return (
    <div>
      {/* change code below this line */}
      <p>The current date is: {props.date}</p>
      {/* change code above this line */}
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        {/* change code below this line */}
        <CurrentDate date={Date()} />
        {/* change code above this line */}
      </div>
    );
  }
}

//   ================================

// how arrays can be passed as props
// still passing info form a parent to a child

const List = props => {
  {
    /* change code below this line */
  }
  return <p>{props.tasks.join(", ")}</p>;
  {
    /* change code above this line */
  }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        {/* change code below this line */}
        <List tasks={["walk dog", "workout"]} />
        <h2>Tomorrow</h2>
        <List tasks={["walk dog", "workout", "shop"]} />
        {/* change code above this line */}
      </div>
    );
  }
}
// ===============================================
// Setting default Props

const ShoppingCart = props => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  );
};
// change code below this line

ShoppingCart.defaultProps = { items: 0 };

// ========================

// Override Default Props

const Items = props => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>;
};

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    {
      /* change code below this line */
    }
    //   Overriding here
    return <Items quantity={10} />;
    {
      /* change code above this line */
    }
  }
}

//   =============================
// Use PropTypes to Define the Props You Expect Passed

const Items = props => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>;
};

// change code below this line
Items.propTypes = {
  quantity: PropTypes.number.isRequired
};
// change code above this line

// other example
//   MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />;
  }
}

//   ==============================

// what if the child component that you're passing a prop to is an ES6 class component,
// rather than a stateless functional component?
// The ES6 class component uses a slightly different convention to access props.

// Anytime you refer to a class component within itself, you use the this keyword.

class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* change code below this line */}
        <p>
          Your temporary password is: <strong>{this.props.tempPassword}</strong>
        </p>
        {/* change code above this line */}
      </div>
    );
  }
}

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Reset Password</h2>
        <h3>We've generated a new temporary password for you.</h3>
        <h3>Please reset this password from your account settings ASAP.</h3>
        {/* change code below this line */}
        <ReturnTempPassword tempPassword={"123456789"} />
        {/* change code above this line */}
      </div>
    );
  }
}

//   ==================================
// Review Using Props with Stateless Functional Components

// - A stateless functional component is any function you write which accepts props and returns JSX.
// - A stateless component, on the other hand, is a class that extends React.Component, but does not use internal state
// - Finally, a stateful component (React component) is a class component that does maintain its own internal state.

class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper name={"CamperBot"} />
      </div>
    );
  }
}
// change code below this line
const Camper = props => {
  return (
    <div>
      <h1>Camper Component</h1>
      <p>{props.name}</p>
    </div>
  );
};

Camper.defaultProps = { name: "CamperBot" };

Camper.propTypes = {
  name: PropTypes.string.isRequired
};

// ===============================
// Create a Stateful Component
// State consists of any data your application needs to know about, that can change over time.
// You want your apps to respond to state changes and present an updated UI when necessary.

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // initialize state here
    this.state = {
      name: "Name"
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

//   ===========================
// Render State in the User Interface

// If you want to access a state value within the return of the render method,
// you have to enclose the value in curly braces.

// State is one of the most powerful features of components in React. It allows you to track important data in your app and render a UI in response to changes in this data.
// State is encapsualated to the component it is initialized in

// Code as above
// ===========================

// Render State in the User Interface Another Way

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "freeCodeCamp"
    };
  }
  render() {
    // change code below this line
    const name = this.name;
    // change code above this line
    return (
      <div>
        {/* change code below this line */}
        <h1>{name}</h1>
        {/* change code above this line */}
      </div>
    );
  }
}
// ====================================

// Change a components state with setState
// Set State with this.setState

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Initial State"
    };
    this.handleClick = this.handleClick.bind(this);
    //   explicitly bind this in the constructor so this
    // becomes bound to the class methods when the component is initialized

    // when you call a function like this.setState() within your class method,
    //  this refers to the class and will not be undefined.
  }
  handleClick() {
    // change code below this line
    this.setState({
      name: "React Rocks!"
    });
    // change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

//   ===========================

// Bind 'this' to a Class Method

// There are a few ways to allow your class methods to access 'this'
// - One common way is to explicitly bind this in the constructor so this
// becomes bound to the class methods when the component is initialized
// e.g. this.handleClick = this.handleClick.bind(this)

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    // change code below this line
    this.handleClick = this.handleClick.bind(this);
    // change code above this line
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        {/* change code below this line */}
        <button onClick={this.handleClick}>Click Me</button>
        {/* change code above this line */}
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}

// =============================

// Use State to Toggle an Element

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // change code below this line
    this.toggleVisibility = this.toggleVisibility.bind(this);
    // change code above this line
  }
  // change code below this line
  toggleVisibility() {
    this.setState(state => ({
      visibility: !state.visibility
    }));
  }
  // change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}

//   =======================================

// Write a Simple Counter

class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
   }
    reset() {
      this.setState({
        count: 0
      });
    }
    increment() {
      this.setState(state => ({
        count: state.count + 1
      }));
    }
    decrement() {
      this.setState(state => ({
        count: state.count - 1
      }));
    }
    render() {
      return (
        <div>
          <button className='inc' onClick={this.increment}>Increment!</button>
          <button className='dec' onClick={this.decrement}>Decrement!</button>
          <button className='reset' onClick={this.reset}>Reset</button>
          <h1>Current Count: {this.state.count}</h1>
        </div>
      );
    }
  };


// ===================================

// Create a Controlled Input 

class ControlledInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
    render() {
      return (
        <div>
          <input
            value={this.state.input}
            onChange={this.handleChange} />
          <h4>Controlled Input:</h4>
  
          <p>{this.state.input}</p>
        </div>
      );
    }
  };

//   When you type in the input box, that text is processed by the handleChange() 
//   method, set as the input property in the local state, and rendered as the 
//   value in the input box on the page.
// ======================================


// Create a Controlled Form

class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        submit: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
    handleSubmit(event) {
      // change code below this line
      event.preventDefault()
      this.setState({
        submit: this.state.input
      });
      // change code above this line
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            { /* change code below this line */ }
            <input
            value={this.state.input}
            onChange={this.handleChange} />
            { /* change code above this line */ }
            <button type='submit'>Submit!</button>
          </form>
          { /* change code below this line */ }
            <h1>{this.state.submit}</h1>
          { /* change code above this line */ }
        </div>
      );
    }
  };
  
//   ================================

// Pass State as Props to Child Components

class MyApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'CamperBot'
      }
    }
    render() {
      return (
         <div>
           <Navbar name={this.state.name}/>
         </div>
      );
    }
  };
  class Navbar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
      <div>
        <h1>Hello, my name is: {this.props.name}</h1>
      </div>
      );
    }
  };

//   ===============

// Pass a Callback as Props

// You can pass state as props to child components, but you're not limited to passing data. You can also pass handler functions or any method that's
//  defined on a React component to a child component.

class MyApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: ''
      }
    this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.setState({
        inputValue: event.target.value
      });
    }
    render() {
      return (
         <div>
           <GetInput
             input={this.state.inputValue}
             handleChange={this.handleChange}/>
           <RenderInput
             input={this.state.inputValue}/>
         </div>
      );
    }
  };
  
  class GetInput extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>Get Input:</h3>
          <input
            value={this.props.input}
            onChange={this.props.handleChange}/>
        </div>
      );
    }
  };
  
  class RenderInput extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>Input Render:</h3>
          <p>{this.props.input}</p>
        </div>
      );
    }
  };
  
// ===================================

// Use the Lifecycle Method componentWillMount

componentWillMount()
// The componentWillMount() method is called before the render() method 
// when a component is being mounted to the DOM. 
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    componentWillMount() {
      // change code below this line
  console.log('hi!')
      // change code above this line
    }
    render() {
      return <div />
    }
  };



componentDidMount() 
// The best practice with React is to place API calls or any calls to your server in the
// lifecycle method componentDidMount(). This method is called after a component is mounted to the DOM

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeUsers: null
      };
    }
    componentDidMount() {
      setTimeout( () => {
        this.setState({
          activeUsers: 1273
        });
      }, 2500);
    }
    render() {
      return (
        <div>
          <h1>Active Users: { this.state.activeUsers }</h1>
        </div>
      );
    }
  };




//   Add Event Listeners
// The componentDidMount() method is also the best 
// place to attach any event listeners you need to add for specific functionality. 

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        message: ''
      };
      this.handleEnter = this.handleEnter.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    // change code below this line
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress)
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress)
    }
    // change code above this line
    handleEnter() {
      this.setState({
        message: this.state.message + 'You pressed the enter key! '
      });
    }
    handleKeyPress(event) {
      if (event.keyCode === 13) {
        this.handleEnter();
      }
    }
    render() {
      return (
        <div>
          <h1>{this.state.message}</h1>
        </div>
      );
    }
  };

//   =========================================
  
// Optimize Re-Renders with shouldComponentUpdate

class OnlyEvens extends React.Component {
    constructor(props) {
      super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
      console.log('Should I update?');
       // change code below this line
       return nextProps.value % 2 === 0;
       // change code above this line
    }
    componentDidUpdate() {
      console.log('Component re-rendered.');
    }
    render() {
      return <h1>{this.props.value}</h1>
    }
  };
  
  class Controller extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 0
      };
      this.addValue = this.addValue.bind(this);
    }
    addValue() {
      this.setState({
        value: this.state.value + 1
      });
    }
    render() {
      return (
        <div>
          <button onClick={this.addValue}>Add</button>
          <OnlyEvens value={this.state.value}/>
        </div>
      );
    }
  };
  
//   =============================

// Inline styles 

class Colorful extends React.Component {
    render() {
      return (
        <div style={{color: 'red', fontSize: 72}}>Big Red</div>
      );
    }
  };

//   ===================

// Add Inline Styles in React

// const styles =
const styles = {
    color: "purple",
    fontSize: 40,
    border: "2px solid purple"
  };
  // change code above this line
  class Colorful extends React.Component {
    render() {
      // change code below this line
      return (
        <div style={styles}>Style Me!</div>
    // change code above this line
      );
    }
  };

//   =========================

// Use Advanced JavaScript in React Render Method

const inputStyle = {
    width: 235,
    margin: 5
  }
  
  class MagicEightBall extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userInput: '',
        randomIndex: ''
      }
      this.ask = this.ask.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    ask() {
      if (this.state.userInput) {
        this.setState({
          randomIndex: Math.floor(Math.random() * 20),
          userInput: ''
        });
      }
    }
    handleChange(event) {
      this.setState({
        userInput: event.target.value
      });
    }
    render() {
      const possibleAnswers = [
        'It is certain',
        'It is decidedly so',
        'Without a doubt',
        'Yes, definitely',
        'You may rely on it',
        'As I see it, yes',
        'Outlook good',
        'Yes',
        'Signs point to yes',
        'Reply hazy try again',
        'Ask again later',
        'Better not tell you now',
        'Cannot predict now',
        'Concentrate and ask again',
        'Don\'t count on it',
        'My reply is no',
        'My sources say no',
        'Most likely',
        'Outlook not so good',
        'Very doubtful'
      ];
      const answer = possibleAnswers[this.state.randomIndex];
      // advanced JS is here before the return method
      return (
        <div>
          <input
            type="text"
            value={this.state.userInput}
            onChange={this.handleChange}
            style={inputStyle} /><br />
          <button onClick={this.ask}>
            Ask the Magic Eight Ball!
          </button><br />
          <h3>Answer:</h3>
          <p>
            { /* change code below this line */ }
            {answer}
            { /* change code above this line */ }
          </p>
        </div>
      );
    }
  };

// ===============================================

//   Render with an If-Else Condition 

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        display: true
      }
      this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
      this.setState({
        display: !this.state.display
      });
    }
    render() {
      // change code below this line
        if (this.state.display === true) {
            return (
                <div>
                  <button onClick={this.toggleDisplay}>Toggle Display</button>
                  <h1>Displayed!</h1>
                </div>
             );
        } else {
            return (
                <div>
                  <button onClick={this.toggleDisplay}>Toggle Display</button>
                </div>
             );
        }
      
    }
  };
  
//   ==================================================

// Use && for a More Concise Conditional 

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        display: true
      }
   this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
      this.setState(state => ({
        display: !state.display
      }));
    }
    render() {
      // change code below this line
      return (
         <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
           {this.state.display && <h1>Displayed!</h1>}
         </div>
      );
    }
  };

//   ================================================
  
// Use a Ternary Expression for Conditional Rendering

const inputStyle = {
    width: 235,
    margin: 5
  }
  
  class CheckUserAge extends React.Component {
    constructor(props) {
      super(props);
      // change code below this line
      this.state = {
        input: '',
        userAge: ''
      }
      // change code above this line
      this.submit = this.submit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
      this.setState({
        input: e.target.value,
        userAge: ''
      });
    }
    submit() {
      this.setState(state => ({
        userAge: state.input
      }));
    }
    render() {
      const buttonOne = <button onClick={this.submit}>Submit</button>;
      const buttonTwo = <button>You May Enter</button>;
      const buttonThree = <button>You Shall Not Pass</button>;
      return (
        <div>
          <h3>Enter Your Age to Continue</h3>
          <input
            style={inputStyle}
            type="number"
            value={this.state.input}
            onChange={this.handleChange} /><br />
          {
            this.state.userAge === '' ?
            buttonOne :
            this.state.userAge >= 18 ?
            buttonTwo :
            buttonThree
          }
        </div>
      );
    }
  };
  
//   =================================================

// Render Conditionally from Props

class Results extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <h1>
        {
          this.props.fiftyFifty ?
          'You Win!' :
          'You Lose!'
        }
        </h1>
      )
    };
  };
  
  class GameOfChance extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 1
      }
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState({
        counter: this.state.counter + 1
      });
    }
    render() {
      const expression = Math.random() >= .5;
      return (
        <div>
          <button onClick={this.handleClick}>Play Again</button>
          <Results fiftyFifty={expression} />
          <p>{'Turn: ' + this.state.counter}</p>
        </div>
      );
    }
  };
  

// ================================

// Change Inline CSS Conditionally Based on Component State

// You want to style this border red if the user types more than 15 
// characters of text in the input box. Add a condition to check for
//  this and, if the condition is valid, set the input border style to
//   3px solid red

class GateKeeper extends React.Component {
    class GateKeeper extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            input: ''
          };
          this.handleChange = this.handleChange.bind(this);
        }
        handleChange(event) {
          this.setState({ input: event.target.value })
        }
        render() {
          let inputStyle = {
            border: '1px solid black'
          };
          if (this.state.input.length > 15) {
            inputStyle.border = '3px solid red';
          };
          return (
            <div>
              <h3>Don't Type Too Much:</h3>
              <input
                type="text"
                style={inputStyle}
                value={this.state.input}
                onChange={this.handleChange} />
            </div>
          );
        }
      };
  

    //   =============================================

    // Use Array.map() to Dynamically Render Elements

    const textAreaStyles = {
        width: 235,
        margin: 5
      };
      
      class MyToDoList extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            toDoList: [],
            userInput: ''
          }
          this.handleSubmit = this.handleSubmit.bind(this);
          this.handleChange = this.handleChange.bind(this);
        }
        handleSubmit() {
          const itemsArray = this.state.userInput.split(',');
          this.setState({
            toDoList: itemsArray
          });
        }
        handleChange(e) {
          this.setState({
            userInput: e.target.value
          });
        }
        render() {
          const items = this.state.toDoList.map( (item, i) => {
            return <li key={i}>{item}</li>
          });
          return (
            <div>
              <textarea
                onChange={this.handleChange}
                value={this.state.userInput}
                style={textAreaStyles}
                placeholder="Separate Items With Commas" /><br />
              <button onClick={this.handleSubmit}>Create List</button>
              <h1>My "To Do" List:</h1>
              <ul>
                {items}
              </ul>
            </div>
          );
        }
      };
      

// ====================================

// Give Sibling Elements a Unique Key Attribute


const frontEndFrameworks = [
    const frontEndFrameworks = [
        'React',
        'Angular',
        'Ember',
        'Knockout',
        'Backbone',
        'Vue'
      ];
      
      function Frameworks() {
        const renderFrameworks = frontEndFrameworks.map((fw, i) => <li key={i}>{fw}</li>);
        return (
          <div>
            <h1>Popular Front End JavaScript Frameworks</h1>
            <ul>
              {renderFrameworks}
            </ul>
          </div>
        );
      };

// ====================================================

// Use Array.filter() to Dynamically Filter an Array

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users: [
          {
            username: 'Jeff',
            online: true
          },
          {
            username: 'Alan',
            online: false
          },
          {
            username: 'Mary',
            online: true
          },
          {
            username: 'Jim',
            online: false
          },
          {
            username: 'Sara',
            online: true
          },
          {
            username: 'Laura',
            online: true
          }
        ]
      }
    }
    render() {
      const usersOnline = this.state.users.filter(user => {
        return user.online;
      });
      const renderOnlineUsers = usersOnline.map(user => {
        return (
          <li key={user.username}>{user.username}</li>
        );
      });
      return (
         <div>
           <h1>Current Online Users:</h1>
           <ul>
            {renderOnlineUsers}
          </ul>
         </div>
      );
    }
  };

//   ==============================================

// Render React on the Server with renderToString

class App extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <div/>
    }
  };
  
  // change code below this line
  ReactDOMServer.renderToString(<App/>);

  
  
  


















