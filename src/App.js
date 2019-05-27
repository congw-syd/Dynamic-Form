import React, {Component} from 'react';
import DynamicForm from './components/DynamicForm';
import './App.css';

class App extends Component {
  state = {
    data: [
      {name: 'test', gender: 1, weight: 70, height: 175, bmi: 24.2}
    ]
  }
  onSubmit = (model) => {
    if(model.hasOwnProperty('height')){
      let bmi = model.weight/(model.height*model.height)*10000;
      bmi = bmi.toFixed(1);
      Object.assign(model,{bmi});
    }
    console.log(JSON.stringify(model));
    this.setState({
      data: [ model, ...this.state.data]
    })
  }
  render(){
    return (
      <div className="App">
        <DynamicForm 
            title = "BMI"
            model = {[
              {
                id: 'name',
                displayName: 'Name',
                type: 'textInput',
                display: true,
                isRequired: true
              },
              {
                id: 'gender',
                displayName: 'Gender',
                type: 'select',
                options: [
                  {
                    id: 1,
                    name: 'Male',
                    isDefault: true,
                    sortOrder: 1
                  },
                  {
                    id: 2,
                    name: 'Female',
                    isDefault: false,
                    sortOrder: 2
                  }
                ],
                display: true,
                isRequired: false
              },
              {
                id: 'weight',
                displayName: 'Weight',
                unitOfMeasure: 'kg',
                type: 'numberInput',
                bounds: {
                  upperLimit: 1000,
                },
                display: true,
                isRequired: true
              },
              {
                id: 'height',
                displayName: 'Height',
                unitOfMeasure: 'cm',
                type: 'numberInput',
                bounds: {
                  upperLimit: 300,
                },
                display: true,
                isRequired: true
              },
              {
                id: 'bmi',
                displayName: 'BMI',
                unitOfMeasure: 'kg/m2',
                type: 'numberInput',
                bounds: {
                  upperLimit: 100,
                },
                display: false,
                isRequired: false
              },
            ]}
            /*model = {[
              {
                id: 'name',
                displayName: 'Name',
                type: 'textInput',
                display: true,
                isRequired: true
              },
              {
                id: 'gender',
                displayName: 'Gender',
                type: 'select',
                options: [
                  {
                    id: 1,
                    name: 'Male',
                    isDefault: true,
                    sortOrder: 1
                  },
                  {
                    id: 2,
                    name: 'Female',
                    isDefault: false,
                    sortOrder: 2
                  }
                ],
                display: true,
                isRequired: false
              },
              {
                id: 'head-circumference',
                displayName: 'Head Circumference',
                unitOfMeasure: 'cm',
                type: 'numberInput',
                bounds: {
                  upperLimit: 1000,
                },
                display: true,
                isRequired: true
              }
            ]}*/
            onSubmit = { (model)=>{this.onSubmit(model)}}
        />
      </div>
    );
  }
    
}

export default App;
